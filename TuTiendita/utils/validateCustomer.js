const isCustomer = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    // This is directly from the `/gallery/:id` and `/painting/:id` routes
    if (req.session.user != 'customer') {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = isCustomer;
  