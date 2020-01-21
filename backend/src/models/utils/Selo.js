const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    Endereço: [String],
    bio: String,
    avatar_url: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Selo', SeloSchema);
