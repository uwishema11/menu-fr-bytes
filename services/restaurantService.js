
const models = require('../models')

const addRestaurant = async (newRest) => {
  const restaurant = await models.Restourant.create(newRest);
  return restaurant;
};

const getRestaurants = async () =>{
  const allRestaurants = await models.Restourant.findAll();
  return allRestaurants;
}
const getSingleRestaurant = async (id) =>{
  const restaurant = await models.Restourant.findOne({ where: {id:`${id}`}});
  return restaurant;
}

module.exports = { 
  addRestaurant,
  getSingleRestaurant,
  getRestaurants
}