const router = require('express').Router();
const { Product, StoreOwner} = require('../../models');

router.get('/', async (req, res) => {
    try {
      const productData = await Product.findAll();
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/productowner', async (req, res) => {
    try {
      const productData = await Product.findAll({
        include: [{model: StoreOwner, as: 'storeOwner'}]
      });
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
