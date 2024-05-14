//importing models
const { User, Product, Category, Order } = require("../models");
//importing auth
const { signToken, AuthenticationError } = require('../utils/auth.js');
//stripe for payment
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
  Query: {
    category: async () => {
      return await Category.find({});
    },
    products: async (parent, {category, name}) => {
      const params = {};

      if(category){
        params.category = category;
      }
      if(name) {
        params.name = {
          $regex: name,
        }
      }
      return await Product.find(params).populate('category');
    },
    product: async (parent, {_id}) => {
        return await Product.find(_id).populate('category');
    },
    user: async () => {
      return await User.find({});
    },
  },
};

module.exports = resolvers;
