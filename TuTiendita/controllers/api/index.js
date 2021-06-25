const router = require('express').Router();
const loginRoutes = require('./login-routes');
const productsRoutes = require('./products-routes');
const customersRoutes = require('./customers-routes');
const ordersRoutes = require('./orders-routes');
const storesRoutes = require('./stores-routes');

router.use('/users', loginRoutes);
router.use('/products', productsRoutes);
router.use('/customers', customersRoutes);
router.use('/orders', ordersRoutes);
router.use('/stores', storesRoutes);

module.exports = router;
