const db = require('../config/connection');
const { User, Category, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const productSeeds = require('./productSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'user'); //maybe capitalize second one
  await cleanDB('Category', 'category');
  await cleanDB('Product', 'product');

  await User.create(userSeeds);
  await Category.create(categorySeeds);
  await Product.create(productSeeds);

  console.log('all done!');
  process.exit(0);
});
