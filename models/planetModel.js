const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exoplanetSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    size: {
        type: Number,
        required: true
    },
    atmosphere: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Rocky', 'Gas', 'Ice']
    },
    discoveredBy: {
        type: String,
        required: true
    },
    discoveryDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Exoplanet', exoplanetSchema);