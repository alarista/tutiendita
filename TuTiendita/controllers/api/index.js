const router = require('express').Router();
const productsRoutes = require('./products-routes');
const loginRoutes = require('./login-routes');
const customersRoutes = require('./customers-routes');

router.use('/products', productsRoutes);
router.use('/users', loginRoutes);
router.use('/customers', customersRoutes);

module.exports = router;
