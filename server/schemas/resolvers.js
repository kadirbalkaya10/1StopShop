const { User, Product, Category } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find({});
    },
    category: async () => {
      return await Category.find({});
    },
    product: async () => {
      return await Product.find({});
    }
  },
};

module.exports = resolvers;
