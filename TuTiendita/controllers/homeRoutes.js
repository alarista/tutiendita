const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all examples 
    const dbProductData = await Example.findAll();

    // Serialize data so the template can read it
    const products = dbProductData.map((product) => product.get({ plain: true }));

    // Pass serialized data
    res.render('homepage', { 
      products, 
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;