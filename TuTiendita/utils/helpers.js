// Custom handlebars helper functions
module.exports = {
  get_tag_color: (orderStatus) => {
    if(orderStatus == 'Completed'){
        return "bg-success";
    }else {
        return "bg-info";
    }
  },
  get_date: () => {
    const format = require('date-fns/format');
    const date = new Date();
    const formattedDate = format(date, 'EEEE,MMMM do, yyyy hh:mm a');
    console.log(formattedDate);
    return formattedDate;
  }

//   total_products: () => {

//   }
};
