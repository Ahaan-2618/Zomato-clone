const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemsData = new Schema({
    name: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("items", ItemsData, "items");