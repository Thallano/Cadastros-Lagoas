const axios = require('axios');
const Selo = require('../models/Selo');
const parseStringAsArray = require('../utils/parseStringAsArray');
//const { findConnections, sendMessage} = require ('../websocket');
// index, show , store , update , destroy

module.exports = {
    async index(request, response) {
        const selos = await Selo.find();

        return response.json(selos);
    },
    
    async store (request, response) {
        
        const { imovel,  name , edital , latitude, longitude } = request.body;
        
        let selo = await Selo.findOne({ imovel });
        
        
        if (!selo){
            // const apiResponse = await axios.get(`https://avatars1.githubusercontent.com/u/20881531?s=460&v=4`);
        
            // const{ name = login, avatar_url, bio } = apiResponse.data;
        
            editalArray = parseStringAsArray(edital);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            
            selo = await Selo.create({
                imovel,
                name,
                edital,
                // endereço: endereçoArray,
                location,
            })
        }
    
    /*  const sendSocketMenssageTo = findConnections (
          { latitude, longitude },
          endereçoArray,
      )

        sendMessage(sendSocketMenssageTo,'new-Selo', Selo);

    }*/
   
    return response.json(selo);
    },
};
