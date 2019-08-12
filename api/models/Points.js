
// Schema for points 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Point = new Schema({
    point_name: {
        type: String
    },
    point_adress_fv: {
        type: String
    },
    point_adress: {
        type: String
    }
}, {
    collection: 'points'
});

module.exports = mongoose.model('Points', Point);