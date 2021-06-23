const {Orders} = require ('../models');

const ordersData = [
    {
        status: 'Completed',
        customer_id: '1',
        store_owner_id: '1',
    },
    {
        status: 'Completed',
        customer_id: '1',
        store_owner_id: '1',
    },
    {
        status: 'Completed',
        customer_id: '1',
        store_owner_id: '2',
    },
    {
        status: 'In Process',
        customer_id: '1',
        store_owner_id: '1',
    },
    {
        status: 'Completed',
        customer_id: '2',
        store_owner_id: '2',
    },
    {
        status: 'In Process',
        customer_id: '2',
        store_owner_id: '2',
    },
    {
        status: 'Completed',
        customer_id: '3',
        store_owner_id: '1',
    },
    {
        status: 'In Process',
        customer_id: '4',
        store_owner_id: '2',
    },
]

const seedOrders = () => Orders.bulkCreate(ordersData);

module.exports = seedOrders;