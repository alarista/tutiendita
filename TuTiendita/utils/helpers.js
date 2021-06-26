// Custom handlebars helper functions
module.exports = {
  get_tag_color: (orderStatus) => {
    if(orderStatus == 'Completed'){
        return "bg-success";
    }else {
        return "bg-info";
    }
  },

//   total_products: () => {

//   }
};
