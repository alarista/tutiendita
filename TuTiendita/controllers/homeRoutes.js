const router = require('express').Router();
const { Example, Product } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all examples 
    const exampleData = await Example.findAll();

    // Serialize data so the template can read it
    const examples = exampleData.map((example) => example.get({ plain: true }));

    // Pass serialized data
    res.render('homepage', { 
      examples, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products', async(req,res)=>{
    try {
      const productsList = await Product.map({
        include: [
          {
            model: Product,
            attributes: [
              'product_name',
              'price',
              'category',
              'filename',
              'description',
            ],
          },
        ],
      });
      const products = productsList.get({ plain: true });
      res.render('products-seller', { products });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

module.exports = router;