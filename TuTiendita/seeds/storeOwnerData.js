const {StoreOwner} = require ('../models');

const storeOwnerData = [
    {
        owner_name: 'Alfonso Lopez',
        store_name: 'Don Poncho Y Su Pandilla',
        email: 'poncho@gmail.com',
        password: 'poncho1234',
    },
    {
        owner_name: 'Teresa Salazar',
        store_name: 'Abarrotes la Tere',
        email: 'teresa@gmail.com',
        password: 'teresa1234',
    },
]

const seedStoreOwner = () => StoreOwner.bulkCreate(storeOwnerData);

module.exports = seedStoreOwner;