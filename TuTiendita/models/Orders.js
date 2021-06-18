const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Orders extends Model {}
// id, products, quantity, ordervalue, idcustomer
Orders.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        order_number:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'In Process'
        },
        customer_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'customers',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'orders',
    }
)