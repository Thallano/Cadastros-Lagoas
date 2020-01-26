const axios = require('axios');
const Selo = require('../models/Selo');
const parseStringAsArray = require('../utils/parseStringAsArray');

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
                          
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            
            selo = await Selo.create({
                imovel,
                name,
                edital,
                location,
            })
        }
    
  
    return response.json(selo);
    },
};
