const sequelize = require('../config/connection');

const storeOwnerData = require('./storeOwnerData');
const customersData = require('./customersData');
// const categoryData = require('./categoryData');
const productData = require('./productData');
const ordersData = require('./ordersData');
const orderDetailsData = require('./orderDetailsData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await storeOwnerData();
  console.log('\n----- STORE OWNERS SEEDED -----\n');
  await customersData();
  console.log('\n----- CUSTOMERS SEEDED -----\n');
  // await categoryData();
  // console.log('\n----- CATEGORIES SEEDED -----\n');
  await productData();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await ordersData();
  console.log('\n----- ORDERS SEEDED -----\n');
  await orderDetailsData();
  console.log('\n----- ORDER DETAILS SEEDED -----\n');
  process.exit(0);
};

seedDatabase();
