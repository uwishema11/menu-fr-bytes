
 const restaurantService = require ('../services/restaurantService')



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
    // const createdRestaurant  =await models.Restourant.create(result)
    const createdRestaurant  =await restaurantService.addRestaurant(result)
    
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

exports.getAllRestaurants = async(req,res) =>{
  
  try{
      const restaurants = await restaurantService.getRestaurants();
      return res.status(200).json({
        success :true,
        result :restaurants
      })
  }
  catch (error){
    console.log(error)
    res.status(500).json({
      success: 'failled',
      result:error.message
    })
  }
}