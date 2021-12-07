const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationData = new Schema({
    city: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("location", locationData, "cities");