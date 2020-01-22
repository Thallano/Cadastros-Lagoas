const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const SeloSchema = new mongoose.Schema({
    imovel: String,
    name: String,
    edital: [String],
    
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Selo', SeloSchema);
