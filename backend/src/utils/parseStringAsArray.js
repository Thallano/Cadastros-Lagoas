module.exports = function parseStringAsArray(arrayAsString){
    return  arrayAsString.split(', ').map(imovel => imovel.trim());

}