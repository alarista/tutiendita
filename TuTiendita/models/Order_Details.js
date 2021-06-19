const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_Details extends Model {}
// id, products, quantity, ordervalue, idcustomer
Order_Details.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        product_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'products',
                key: 'id',
            }
        },
        product_price:{
            type: DataTypes.INTEGER,
            references:{
                model: 'products',
                key: 'price',
            }
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
)