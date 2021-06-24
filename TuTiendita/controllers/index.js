const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const yourStoreRoutes = require('./yourStoreRoutes');
const storeRoutes = require('./store-routes');
const ordersRoutes = require('./orders-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/your_store', yourStoreRoutes);
router.use('/store', storeRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;
