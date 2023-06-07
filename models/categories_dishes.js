'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories_dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  categories_dishes.init({
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'categories_dishes',
  });
  return categories_dishes;
};