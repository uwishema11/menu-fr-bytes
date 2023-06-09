'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Restourant ,{
        foreignKey: 'restourantId',
        as:'restourant'
      })
    }
  }
  Review.init({
    rating: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Review',
  });

  return Review;
};