const isCustomer = (req, res, next) => {
    if (req.session.user != 'customer') {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = isCustomer;
  