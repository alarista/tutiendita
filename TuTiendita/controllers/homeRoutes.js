const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all examples 
    const tuTiendita_db = await Product.findAll();

    // Serialize data so the template can read it
    const products = tuTiendita_db.map((product) => product.get({ plain: true }));

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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;