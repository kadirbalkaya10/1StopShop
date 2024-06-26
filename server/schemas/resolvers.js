//importing models
// const { useBackgroundQuery } = require("@apollo/client");
const { User, Product, Category, Order } = require("../models");
//importing auth
const { signToken, AuthenticationError } = require("../utils/Auth.js");
//stripe for payment
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//resolvers for queries and mutations
const resolvers = {
  //Queries
  Query: {
    category: async (_, { _id }) => {
      return await Category.findById({ _id });
    },
    products: async (_) => {
     
      return await Product.find().populate("category");
    },
    product: async (parent, { _id }) => { //to find one by id
      console.log(_id);
      return await Product.findOne({ _id }).populate("category");
    },
    users: async () => await User.find(),
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate("orders");
        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw AuthenticationError;
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw AuthenticationError;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      // We map through the list of products sent by the client to extract the _id of each item and create a new Order.
      await Order.create({ products: args.products.map(({ _id }) => _id) });
      const line_items = [];

      for (const product of args.products) {
        line_items.push({
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: [`${url}/images/${product.image}`],
            },
            unit_amount: product.price * 100,
          },
          quantity: product.purchaseQuantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  //Mutations
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        // create an order with that product
        const order = await Order.create({
          products,
        });

        // update user with the order
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        const populatedOrder = await order.populate({
          path: "products",
          populate: {
            path: "category",
          },
        });

        return populatedOrder;
      }
      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw AuthenticationError;
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => { //logs in user based on email and password and checks password as it is hashed upon signup
      try {
        const user = await User.findOne({ email });
        console.log(user);
        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = user.isCorrectPassword(password);
        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);
        console.log("Token: ", token);
        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
