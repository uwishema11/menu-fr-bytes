
const addressService = require('../services/addressesService')

exports.createAddresses = async(data) =>{
    try{
        const createdAddress =req.body
        
        const {error} = createdAddress;
        if(error) {
            return res.status(400).json({
                success: "failled",
                message: error.message
            })
        }
        await addressService.createAddress(createdAddress);

        return res.status(200).json({
            success: true,
            results: createdAddress
        })
    }
    catch(error){
        return res.status(500).json({
            success: 'failled',
            message: error.message
        })
    }
};