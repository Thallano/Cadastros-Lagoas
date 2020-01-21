const axios = require('axios');
const Dev = require('../models/Selo');
//const parseStringAsArray = require('../utils/parseStringAsArray');
//const { findConnections, sendMessage} = require ('../websocket');
// index, show , store , update , destroy

module.exports = {
    async index(request, response) {
        const selo = await Dev.find();

        return response.json(selo);
    },
    
    async store (request, response) {
        const { selos , endereço, latitude, longitude } = request.body;
    
       let dev = await Dev.findOne({ selos });
    
        if (!dev){
            // const apiResponse = await axios.get(`https://avatars1.githubusercontent.com/u/20881531?s=460&v=4`);
        
            const{ name = login, avatar_url, bio } = apiResponse.data;
        
            const endereçoArray = parseStringAsArray(endereço);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            
            dev = await Dev.create({
                selos ,
                name,
                avatar_url,
                bio,
                endereço: endereçoArray,
                location,
            })


      const sendSocketMenssageTo = findConnections (
          { latitude, longitude },
          endereçoArray,
      )

        sendMessage(sendSocketMenssageTo,'new-dev', dev);

    }
   
    return response.json(dev);
    },
}   