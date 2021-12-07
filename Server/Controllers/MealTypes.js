const _ = require("lodash");
const MealTypes = require("../Models/MealTypesData");

exports.getAllMeal = (req,res) => {
    MealTypes.find()
    .then(response => {
        res.status(200).json({Mealtypes: response})
    })
    .catch( err => {
        res.status(500).json({error: err})
    })
}
