const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    console.log('modelName', modelName);
    console.log('collectionName', collectionName);
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray()

    await db.dropCollection(collectionName);

  } catch (err) {
    console.log(err)
    throw err;
  }
}
