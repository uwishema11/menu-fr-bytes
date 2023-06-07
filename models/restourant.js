'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restourant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restourant.hasOne(models.Address, {
        foreignKey :'restourantId',
        as: 'addresses'
      });
      Restourant.hasMany(models.Review ,{
        foreignKey : 'restourantId',
        as:'reviews'
      })
    }
  }
 Restourant.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Restourant',
  });
  return Restourant;
};