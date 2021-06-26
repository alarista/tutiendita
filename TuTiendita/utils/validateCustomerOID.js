const customerOID = (req, res, next) => {
    res.redirect('/orders/'+req.session.userid);
  };
  
  module.exports = customerOID;
  