const router = require('express').Router();
const { Customers, Orders, Order_Details, Product } = require('../../models');
const bcrypt = require('bcrypt');


router.get('/', async (req, res) => {
    try {
      const customerData = await Customers.findAll();
      res.status(200).json(customerData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const customerData = await Customers.findByPk(req.params.id);    
      const customer = customerData.get({ plain: true });
      res.status(200).json(customer);
    //   res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
      const customerData = await Customers.findByPk(req.params.id, {
        attributes: ['id', 'first_name', 'last_name', 'password'],
        include: 
          {
            model: Orders,
            attributes: ['id','status'],
            include: {
                model: Order_Details,
                attributes: ['quantity', 'total', 'order_id'],
                include: {
                    model: Product,
                },
            },
          },
      });
      const customer = customerData.get({ plain: true });
      res.status(200).json(customer);
    //   res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router;
