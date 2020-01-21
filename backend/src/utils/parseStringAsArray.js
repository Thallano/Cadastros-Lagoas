module.exports = function parseStringAsArray(arrayAsString){
    return  arrayAsString.split(',').map(variavel => variavel.trim());

}