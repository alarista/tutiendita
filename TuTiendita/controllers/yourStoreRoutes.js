const router = require('express').Router();
const { Product, StoreOwner } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
    try {
      const storeOwnerData = await StoreOwner.findByPk(req.params.id, {
        attributes: ['id', 'owner_name', 'store_name'],
        include:{
            model: Product,
        },           
      });
      const storeOwner = storeOwnerData.get({ plain: true });
      res.render('products-seller', { storeOwner, loggedIn: req.session.loggedIn });
      // res.send(storeOwner).json()
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;