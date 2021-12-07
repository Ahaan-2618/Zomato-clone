const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurentsData = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: Number,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("RestaurentsData", RestaurentsData , "restaurants")