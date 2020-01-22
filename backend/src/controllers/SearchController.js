const Selo = require('../models/Selo');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        
        const { latitude, longitude, edital } = request.query;
       
        const editalArray = parseStringAsArray(edital);
        
        const selos = await Selo.find({
            edital: {
                $in: editalArray,
                               

            },
           
        
         /* location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinetes: [longitude, latitude],
                    },
                $maxDistance: 10000,
                },
            },*/
        });
       
        return response.json({ selos }); 
    }
}

