const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const yourStoreRoutes = require('./yourStoreRoutes');
const storeRoutes = require('./store-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/your_store', yourStoreRoutes);
router.use('/store', storeRoutes);

module.exports = router;
