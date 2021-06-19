const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Customers extends Model {}
// id, first_name, last_name, address1. address2, city, state, postal_code, phone, email, password
Customers.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address1:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2:{
            type: DataTypes.STRING,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        postal_code:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail:true
            }           
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[8],
            }   
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              if (updatedUserData.password) {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              }
              return updatedUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'customers',
    }
);

module.exports = Customers;