// import models
const Product = require('./Product');
const StoreOwner = require('./StoreOwner');
// const Category = require('./Category');

const Customers = require('./Customers');
const Orders = require('./Orders');
const Order_Details = require('./Order_Details');

// Products belongsTo Category
// Product.belongsTo(Category, {
//     foreignKey: 'category_id',
// });
// // Categories have many Products
// Category.hasMany(Product, {
//     foreignKey: 'category_id',
// });
// Products belongsTo StoreOwner
Product.belongsTo(StoreOwner, {
  foreignKey: 'storeOwner_id',
});

// StoreOwner have many Products
StoreOwner.hasMany(Product, {
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
Order_Details.belongsTo(Product, {
    foreignKey: 'product_id',
});

Product.hasMany(Order_Details, {
    foreignKey: 'product_id',
});

// Define product_price FK relationship
Order_Details.belongsTo(Product, {
    foreignKey: 'product_price',
});

Product.hasMany(Order_Details, {
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
  Product,
  StoreOwner,
//   Category,
  Customers,
  Order_Details,
  Orders,
};
