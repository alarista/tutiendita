const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Details extends Model {}
// id, product_id, product_price, quantity, total, order_id
Order_Details.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        total:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        product_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'product',
                key: 'id',
            }
        },
        order_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'orders',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_details',
    }
);

module.exports = Order_Details;