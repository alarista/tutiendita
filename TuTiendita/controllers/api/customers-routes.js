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
        attributes: ['id', 'first_name', 'last_name'],
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


// router.get('/hashcustomerspasswords', async (req, res) => {
//     try {
//       const customerData = await Customers.findAll();
//       const customerPassword = [];
//       customerData.forEach( ({id, password}) => {
//         customerPassword.push({id: id, password: password})
//       })
//       console.log(customerPassword);
//       customerPassword[0].password = await bcrypt.hash(customerPassword.password, 10);
//     //   for (let i=0; i<customerPassword.length; i++){
//     //     console.log("asd");
//     //     customerPassword[i].password = await bcrypt.hash(customerPassword.password, 10);
//     //     console.log(customerPassword);
//     //   }
//       console.log(customerPassword);
//       res.status(200).json(customerPassword);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });
  

module.exports = router;

/*
function upsert(values, condition) {
    return Model
        .findOne({ where: condition })
        .then(function(obj) {
            // update
            if(obj)
                return obj.update(values);
            // insert
            return Model.create(values);
        })
}
*/