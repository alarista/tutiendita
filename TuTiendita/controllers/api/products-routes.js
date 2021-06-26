const router = require('express').Router();
const { Product, StoreOwner} = require('../../models');

router.get('/', async (req, res) => {
    try {
      const productData = await Product.findAll();
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/productowner', async (req, res) => {
    try {
      const productData = await Product.findAll({
        include: [{model: StoreOwner, as: 'storeOwner'}]
      });
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/test/:id', async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: ['product_name', 'price', 'category', 'stock', 'filename'],
        where: {
          storeOwner_id: req.params.id,
        },
      });
      // const products = productData.get({ plain: true });
      // res.render('store', { products, loggedIn: req.session.loggedIn });
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      "id": 1,
      "product_name": "Chobani Greek Yogurt Variety Pack, 5.3 oz",
      "price": "1.49",
      "stock": 14,
      "category": "Dairy",
      "filename": "Chobani.jpg",
      "storeOwner_id": 1
    }
  */
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category,
    filename: req.body.category,
    storeOwner_id: req.body.storeOwner_id,
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:filename', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      filename: req.params.filename
    }
  })
  .then(productData => {
    if (!productData) {
      rs.status(404).json({message: 'No product found with this id'});
      return;
    }
    res.json(productData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  module.exports = router;
