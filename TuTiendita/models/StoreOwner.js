// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import bcrypt for password protection
const bcrypt = require('bcrypt');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize StoreOwner model (table) by extending off Sequelize's Model class
class StoreOwner extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }  
}

// set up fields and rules for StoreOwner model
StoreOwner.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
    }
  },
  {
    hooks: {
      beforeCreate: async (newStoreOwnerData) => {
        newStoreOwnerData.password = await bcrypt.hash(newStoreOwnerData.password, 10);
        return newStoreOwnerData;
      }, 
      beforeUpdate: async (updatedStoreOwnerData) => {
        updatedStoreOwnerData.password = await bcrypt.hash(updatedStoreOwnerData.password, 10);
        return updatedStoreOwnerData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'StoreOwner',
  }
);

module.exports = StoreOwner;
