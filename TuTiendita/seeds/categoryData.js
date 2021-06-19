const {Category} = require ('../models');

const categoryData = [
    {
        category_name: 'Dairy',
    },
    {
        category_name: 'Pantry',
    },
    {
        category_name: 'Fruits and Vegetables',
    },
    {
        category_name: 'Veberages',
    },
    {
        category_name: 'Bread',
    },
    {
        category_name: 'Delicatessen',
    },
    {
        category_name: 'Snacks and Candy',
    },  
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
