// import models
const Products = require('./Products');
const StoreOwner = require('./Category');
const Category = require('./Category');

// Products belongsTo Category
Products.belongsTo(Category, {
    foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Products, {
    foreignKey: 'category_id',
});
// Products belongsTo StoreOwner
Products.belongsTo(StoreOwner, {
  foreignKey: 'storeOwner_id',
});

// StoreOwner has many Products
StoreOwner.hasMany(Products, {
  foreignKey: 'products_id',
});

// StoreOwner has many Category
StoreOwner.hasMany(Category, {
  foreignKey: 'category_id',
});

module.exports = {
  Products,
  StoreOwner,
  Category,
};
