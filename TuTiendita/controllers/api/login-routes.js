const router = require('express').Router();
const { Customers, StoreOwner } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await Customers.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    let isValidC = true;
    let isValidO = true;
    const dbCustomersData = await Customers.findOne({
      where: {
        email: req.body.email,
      },
      // raw: true,
    });
    const dbOwnerData = await StoreOwner.findOne({
      where: {
        email: req.body.email,
      },
      // raw: true,
    });
    if (!dbCustomersData) {
      isValidC = false;
    }
    if (!dbOwnerData) {
      isValidO = false;
    }
    if(isValidC){
      const validCustomersPassword = await dbCustomersData.checkPassword(req.body.password);
      if (!validCustomersPassword) {
        isValidC = false;
      }
    }else if (isValidO){
      const validOwnerPassword = await dbOwnerData.checkPassword(req.body.password);
      if (!validOwnerPassword) {
        isValidO = false; 
      }
    }
    if (!isValidC && !isValidO){
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
    }
    req.session.save(() => {
      if (isValidC){
        req.session.user = 'customer';
        req.session.userid = dbCustomersData.id;
        console.log("**************"+req.session.userid);

      }else if (isValidO){
        req.session.user = 'vendor';
        req.session.userid = dbOwnerData.id;
      }
      
      req.session.loggedIn = true;
      if (isValidC){
        res
          .status(200)
          .json({ user: dbCustomersData, message: 'You are now logged in!' });
      }else if (isValidO){
        res
        .status(200)
        .json({ user: dbOwnerData, message: 'You are now logged in!' });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
