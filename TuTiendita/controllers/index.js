const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const yourStoreRoutes = require('./yourStoreRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/your_store', yourStoreRoutes);

module.exports = router;
