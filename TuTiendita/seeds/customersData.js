const {Customers} = require ('../models');

const customersData = [
    {
        first_name:'Alsynoe',
        last_name:'Arista',
        address1:'Av. Revolución 2703 R-07 A',
        city:'Monterrey',
        state:'Nuevo Leon',
        postal_code:'06500',
        phone:'5575329858',
        email:'Alsynoe@gmail.com',
        password:'$2b$10$MWHrABDxjhhLMRHr8ElWpuu081MVn8dW0MDqc.cQ2CWUgIe9FAc2y',
        // password:'alsynoe1234',
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
        password:'$2b$10$7/LN1DFo4TT/sWAoAI3ZqOo3evpxXv6KcouPxjjj/spllq23neXDW',
        // password:'sandra1234',
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
        password:'$2b$10$KRku1x.d57NbrPmz9ieo2uFYx423e8cK4hARzkPfHI3GV7SFoZpcq',
        // password:'alfonso1234',
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
        password:'$2b$10$he7h3/uVX39s3Xc8/rxL.u45nEjCVzH7aQ7Ldhg2dexcYkGBBVW3i',
        // password:'erick1234',
    },
];

const seedCustomers = () => Customers.bulkCreate(customersData);

module.exports = seedCustomers;
