const db = require('../config/connection');
const { User, Category, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const productSeeds = require('./productSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users'); //maybe capitalize second one
  await cleanDB('Category', 'Category');
  await cleanDB('Product', 'Product');

  //creating categories for products
  const categories = await Category.create(categorySeeds);
  const mappedProductSeeds = productSeeds.map(product => {
    const categoryName = product.category;
    const category = categories.find(cat => cat.name === categoryName);
    return {...product, category: category ? category._id: null};
  });

  await User.create(userSeeds);
  await Product.create(mappedProductSeeds);

  console.log('all done!');
  process.exit(0);
});
