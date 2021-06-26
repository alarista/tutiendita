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

router.post('/:id', async (req, res) => {
  try {
    const dbProductData = await Product.create({
      product_name: req.body.productTitle,
      price: req.body.productPrice,
      stock: req.body.productStock,
      category: req.body.productCategory,
      filename: req.body.productImg,
      storeOwner_id: 1,
    });
    console.log(req.body);
    res.status(200).json(dbProductData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:fileName', async (req, res) => {
  try {
  const product = await Product.findOne({
    where: {
      filename: req.params.fileName
    }
  });
    await product.destroy();
    res.status(200);
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

// const forceSync = async () => {
//   await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
//   await db.sequelize.sync({ force: true });
//   await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1'); // setting the flag back for security
// };



module.exports = router;