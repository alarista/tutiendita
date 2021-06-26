const router = require('express').Router();
// const {  } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const isCustomer = require('../utils/validateCustomer');

router.get('/:id', withAuth, isCustomer, async (req, res) => {
    try {
      const query = "SELECT o.id, o.status, s.store_name, c.address1, SUM(od.total) total, SUM(od.quantity) quantity "+
      "FROM storeOwner s "+
      "INNER JOIN orders o "+
      "ON s.id = o.store_owner_id "+
      "INNER JOIN customers c "+
      "ON o.customer_id = c.id "+
      "INNER JOIN order_details od "+
      "ON o.id = od.order_id "+
      "INNER JOIN product p "+
      "ON od.product_id = p.id "+
      "WHERE o.customer_id = ? "+
      "GROUP BY o.id, o.status, s.store_name, c.address1 "+
      "ORDER BY od.order_id ASC"
      const [customerOrders, metadata] = await sequelize.query(query, {
        replacements: [req.params.id],
      });

      res.render('myorders', { customerOrders, loggedIn: req.session.loggedIn });
      // res.send(storeOwner).json()
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});



module.exports = router;