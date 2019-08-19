
// Schema for points 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Point = new Schema({
    time: {
        type: Date, default: Date.now
    },
    point_name: {
        type: String
    },
    point_adress_fv: {
        type: String
    },
    point_adress: {
        type: String
    },
    point_google_maps_adress: {
        type: String
    },
    point_time_open: {
        type: Date, default: Date.now
    },
    point_time_deliver_required: {
        type: Date, default: Date.now
    }
}, {
    collection: 'points'
});

module.exports = mongoose.model('Points', Point);