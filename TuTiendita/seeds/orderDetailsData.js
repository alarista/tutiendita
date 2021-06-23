const {Order_Details} = require ('../models');

const orderDetailsData = [
    {
        product_id: 4,
        quantity: 1,
        total: 7.99,
        order_id: 1,
    },
    {
        product_id: 10,
        quantity: 1,
        total: 4.49,
        order_id: 1,
    },
    {
        product_id: 14,
        quantity: 3,
        total: 1.80,
        order_id: 1,
    },
    {
        product_id: 14,
        quantity: 3,
        total: 1.80,
        order_id: 1,
    },
    {
        product_id: 16,
        quantity: 2,
        total: 21.98,
        order_id: 2,
    },
    {
        product_id: 18,
        quantity: 1,
        total: 11.46,
        order_id: 3,
    },
    {
        product_id: 20,
        quantity: 2,
        total: 8.76,
        order_id: 3,
    },
    {
        product_id: 19,
        quantity: 1,
        total: 16.99,
        order_id: 4,
    },
    {
        product_id: 24,
        quantity: 4,
        total: 5.16,
        order_id: 4,
    },
    {
        product_id: 25,
        quantity: 12,
        total: 4.08,
        order_id: 5,
    },
    {
        product_id: 26,
        quantity: 3,
        total: 6.54,
        order_id: 6,
    },
    {
        product_id: 1,
        quantity: 3,
        total: 4.47,
        order_id: 6,
    },
    {
        product_id: 3,
        quantity: 1,
        total: 4.99,
        order_id: 6,
    },
    {
        product_id: 5,
        quantity: 1,
        total: 29.99,
        order_id: 7,
    },
    {
        product_id: 6,
        quantity: 1,
        total: 5.99,
        order_id: 8,
    },
    {
        product_id: 1,
        quantity: 3,
        total: 4.47,
        order_id: 8,
    },
    {
        product_id: 9,
        quantity: 2,
        total: 4.98,
        order_id: 8,
    },
    {
        product_id: 13,
        quantity: 2,
        total: 4.60,
        order_id: 8,
    },
]

// {
//     product_id: ,
//     product_price: ,
//     quantity: ,
//     total: ,
//     order_id: ,
// }, 

// {
//     product_id: ,
//     product_price: ,
//     quantity: ,
//     total: ,
//     order_id: ,
// },
const seedOrderDetails = () => Order_Details.bulkCreate(orderDetailsData);

module.exports = seedOrderDetails;