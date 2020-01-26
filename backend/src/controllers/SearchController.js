const Selo = require('../models/Selo');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        
        const { edital, imovel } = request.query;
       
        const editalArray = parseStringAsArray(edital);
        
        const selos = await Selo.find({
            
            edital: {
                $in: editalArray,

            },
            
        });
        /*if (imovel = "MAIM097"){

            const cadastro = await Selo.find({
                        
                imovel: {
                    $in: imovel,
            
                },
                           
            });
                return response.json({ cadastro }); 
        }*/
            return response.json({ selos }); 
        }
                       
}

