const router = require('express').Router();
const { Product, StoreOwner } = require('../models');
const sequelize = require('../config/connection');
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

      const query = "SELECT o.id, o.status, s.store_name, c.address1, p.product_name, p.price, od.quantity, od.total, c.address2, c.city, c.state, c.postal_code, c.phone " +
      "FROM storeOwner s "+
      "INNER JOIN orders o "+
      "ON s.id = o.store_owner_id "+
      "INNER JOIN customers c "+
      "ON o.customer_id = c.id "+
      "INNER JOIN order_details od "+
      "ON o.id = od.order_id "+
      "INNER JOIN product p "+
      "ON od.product_id = p.id "+
      "ORDER BY od.order_id ASC"
      const [ordersData, metadata] = await sequelize.query(query);

      res.render('products-seller', { storeOwner, ordersData, loggedIn: req.session.loggedIn });
      // res.send(storeOwner).json()
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;