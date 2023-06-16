
const Restourant = require('../models/restaurant.model')

const addRestaurant = async (newRest) => {
  const restaurant = await Restourant.create(newRest);
  return restaurant;
};

module.exports = { addRestaurant }