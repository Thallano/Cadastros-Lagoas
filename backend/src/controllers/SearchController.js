const Selo = require('../models/Selo');
const parseStringAsArray = require('../utils/parseStringAsArray');



module.exports = {
    async index(request, response) {
        
        const { edital, imovel } = request.query;
        
        //const editalArray = parseStringAsArray(edital);
        //const imovelArray = parseStringAsArray(imovel);
        
        
        const selos = await Selo.find({
        
            $or:[
                {imovel:{$in: imovel}},
                {edital:{$in: edital}}
            ]
            
        });
          return response.json({ selos }); 
        }
                       
}

