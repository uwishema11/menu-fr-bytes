
 const restaurantService = require ('../services/restaurantService')



exports.createRestourant =async (req, res) => {
  try{
    const result = req.body
  
    const {error} =result
    if(error){
        console.log("there is an erro")
        return res.status(400).json({
          success: "failled",
          message: error.message
        })
    }
  
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