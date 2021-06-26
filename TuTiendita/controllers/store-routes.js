const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');
const isCustomer = require('../utils/validateCustomer');

router.get('/', withAuth, isCustomer,async (req, res) => {
    try {
      const dairy = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Dairy",
        },
        raw: true
      });

      const pantry = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Pantry",
        },
        raw: true
      });

      const fruitsAndVegetales = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Fruits and Vegetables",
        },
        raw: true
      });

      const veberages = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Veberages",
        },
        raw: true
      });

      const bread = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Bread",
        },
        raw: true
      });

      const delicatessen = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Delicatessen",
        },
        raw: true
      });

      const snacksAndCandy = await Product.findAll({
        attributes: ['product_name', 'price', 'stock', 'filename'],
        where: {
          category: "Snacks and Candy",
        },
        raw: true
      });
      res.render('store', { dairy, pantry, fruitsAndVegetales, veberages, bread, delicatessen, snacksAndCandy, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;