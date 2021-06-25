const {StoreOwner} = require ('../models');

const storeOwnerData = [
    {
        owner_name: 'Alfonso Lopez',
        store_name: 'Don Poncho Y Su Pandilla',
        email: 'poncho@gmail.com',
        password: '$2b$10$amoQnNHRQXJa6G3gnV8AUOfq5S0R84xCMUn41EPg4p27gxqoiNbmC',
        // password: poncho1234
    },
    {
        owner_name: 'Teresa Salazar',
        store_name: 'Abarrotes la Tere',
        email: 'teresa@gmail.com',
        password: '$2b$10$dOm3rInJ/qZop36LF8huuO/MJsd4l8qGNsI3Rs9NLAkfVlpLzqxY.',
        // password: teresa1234
    },
]

const seedStoreOwner = () => StoreOwner.bulkCreate(storeOwnerData);

module.exports = seedStoreOwner;