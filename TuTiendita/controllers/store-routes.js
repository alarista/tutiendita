const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');


router.get('/:id', async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: ['product_name', 'price', 'category', 'stock', 'filename'],
        where: {
          storeOwner_id: req.params.id,
        },
        raw: true
      });
      res.render('store', { products, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});



module.exports = router;