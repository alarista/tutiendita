const vendorID = (req, res, next) => {
    res.redirect('/your_store/'+req.session.userid);
  };
  
  module.exports = vendorID;
  