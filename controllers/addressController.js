
const addressService = require('../services/addressesService')
const restaurantService = require ('../services/restaurantService')

exports.createAddresses = async(req,res) =>{
    try{
        
        const id = req.body.restourantId
         const restaurantId = await restaurantService.getSingleRestaurant(id);

         if(!restaurantId) {
            return res.status(404).json({
                success: false,
                message: 'Restaurant not faund'
            })
         };

        const createdAddress =req.body
        
        const {error} = createdAddress;
        if(error) {
            return res.status(400).json({
                success: "failled",
                message: error.message
            })
        }
        
        await addressService.addAddress(createdAddress);

        return res.status(200).json({
            success: true,
            results: createdAddress
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
};