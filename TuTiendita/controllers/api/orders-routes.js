const sequelize = require('../../config/connection');
const router = require('express').Router();
// const { Product } = require('../models');

// Status, Store name, Address for delivery, Products bought, Total Cost
/*
storeOwner:
  store_name
Customers:
  address
Orders:
  customer_id
  storeOwner_id
  status
Order details
  product_id
  order_id
  total
  quantity
*/

router.get('/', async (req, res) => {
    try {
      // const [productData, metadata] = await sequelize.query('SELECT * FROM storeOwner');
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
      const [productData, metadata] = await sequelize.query(query);
      res.status(200).json(productData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      // const [productData, metadata] = await sequelize.query('SELECT * FROM storeOwner');
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
                    "WHERE o.id = ?"+
                    "WHERE s.id = ?"+
                    "ORDER BY od.order_id ASC"
      const [productData, metadata] = await sequelize.query(query, {
        replacements: [req.params.id],
      });
      res.status(200).json(productData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;