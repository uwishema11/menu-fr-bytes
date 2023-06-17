
const models = require('../models')

const addRestaurant = async (newRest) => {
  const restaurant = await models.Restourant.create(newRest);
  return restaurant;
};

const getRestaurants = async () =>{
  const allRestaurants = await models.Restourant.findAll();
  return allRestaurants;
}

module.exports = { 
  addRestaurant,
  getRestaurants
}