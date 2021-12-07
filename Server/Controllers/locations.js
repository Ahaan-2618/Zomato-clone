const Locations = require("../Models/locationData")

exports.getLocations = (req,res) => {
    Locations.find()
    .then(response => {
        res.status(200).json({locations: response})
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}
