const Items = require("../Models/ItemsData")

exports.getMenuByResId = (req,res) => {
    const { resId } = req.params;
    Items.find({ restaurantId : resId })
    .then(response => {
        res.status(200).json({ menu: response})
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}