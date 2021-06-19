const {Customers} = require ('../models');

const customersData = [
    {
        first_name:'Alsynoe',
        last_name:'Arista',
        address1:'Rio Panuco #76, Cuauhtemoc',
        city:'Ciudad de Mexico',
        state:'Ciudad de Mexico',
        postal_code:'06500',
        phone:'5575329858',
        email:'Alsynoe@gmail.com',
        password:'alsynoe1234',
    },
    {
        first_name:'Sandra',
        last_name:'Perez',
        address1:'Popocateptl #546, Benito Juarez',
        city:'Ciudad de Mexico',
        state:'Ciudad de Mexico',
        postal_code:'03330',
        phone:'5586259074',
        email:'Sandra@gmail.com',
        password:'sandra1234',
    },
    {
        first_name:'Alfonso',
        last_name:'Nuñez',
        address1:'San Ildefonso 31B, Cuauhtemoc',
        city:'Ciudad de Mexico',
        state:'Ciudad de Mexico',
        postal_code:'06000',
        phone:'5534527801',
        email:'Alfonso@gmail.com',
        password:'alfonso1234',
    },
    {
        first_name:'Erick',
        last_name:'Contreras',
        address1:'Ciudades Hermanas #74',
        city:'Culiacan',
        state:'Sinaloa',
        postal_code:'80220',
        phone:'6672851438',
        email:'Erick@gmail.com',
        password:'erick1234',
    },

];

const seedCustomers = () => Customers.bulkCreate(customersData);

module.exports = seedCustomers;
