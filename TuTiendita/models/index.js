// import models
const Products = require('./Products');
const StoreOwner = require('./Category');
const Category = require('./Category');

const Customers = require('./Customers');
const Orders = require('./Orders');
const Order_Details = require('./Order_Details');

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

// StoreOwner have many Products
StoreOwner.hasMany(Products, {
  foreignKey: 'products_id',
});

// Define customer_id FK relationship
Orders.belongsTo(Customers, {
    foreignKey: 'customer_id',
});

Customers.hasMany(Orders, {
    foreignKey: 'customer_id',
});

// Define product_id FK relationship
Order_Details.belongsTo(Products, {
    foreignKey: 'product_id',
});

Products.hasMany(Order_Details, {
    foreignKey: 'product_id',
});

// Define product_price FK relationship
Order_Details.belongsTo(Products, {
    foreignKey: 'product_price',
});

Products.hasMany(Order_Details, {
    foreignKey: 'product_price',
});

// Define order_id FK relationship
Order_Details.belongsTo(Orders, {
    foreignKey: 'order_id',
});

Orders.hasMany(Order_Details, {
    foreignKey: 'order_id',
});

module.exports = {
  Products,
  StoreOwner,
  Category,
  Customers,
  Order_Details,
  Orders,
};
