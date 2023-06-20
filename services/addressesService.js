
const models = require('../models')

const addAddress = async(data) =>{
    const addedAddress = await models.Address.create(data);
    return addedAddress
};


module.exports = { 
  addAddress
}