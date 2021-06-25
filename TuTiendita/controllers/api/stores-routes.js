const router = require('express').Router();
const { Product } = require('../../models');



router.get('/:id', async (req, res) => {
    try {
      const productData = await Product.findAll({
        attributes: ['product_name', 'price', 'category', 'stock', 'filename'],
        where: {
          storeOwner_id: req.params.id,
        },
      });
      res.status(200).json(productData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});



module.exports = router;