
//  const Restourant = require ('../models/restaurant.model')
 const restaurantService = require ('../services/restaurantService')
 const models = require ('../models');
const { Model } = require('sequelize');


exports.createRestourant =async (req, res) => {
  try{
    const result = {
    name: "Green restaurant",
    description:"testing apis",
    rating:2,
    telephone: "+250783210279",
    hours:"7:00 -23:00"
    }
    console.log(req.body);

    const {error} =req.body
    if(error){
        console.log("there is an erro")
    }
    const createdRestaurant  =await models.Restourant.create(result)
    // const createdRestaurant  =await restaurantService.addRestaurant(result)
    
    console.log(createdRestaurant)
  res.status(200).json({
    status: true,
    data: createdRestaurant ,
  });
  }
  catch(err){
    console.log(err)
  }
};
