const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Orders extends Model {}
// id, order_number, status, customer_id
Orders.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
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
        store_owner_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'storeOwner',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'orders',
    }
);

module.exports = Orders;