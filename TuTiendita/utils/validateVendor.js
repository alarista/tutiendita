const isVendor = (req, res, next) => {
    if (req.session.user != 'vendor') {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = isVendor;
  