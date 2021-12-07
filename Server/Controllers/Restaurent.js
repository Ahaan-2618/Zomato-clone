const RestaurentsData = require('../Models/RestaurentsData')

exports.RestaurentsData = (req,res) => {
    const { LocID } = req.params;
    
    RestaurentsData.find({ location_id : LocID})
    .then(response => {
        res.status(200).json({RestaurentsData: response})
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

exports.RestaurentFilter = (req,res) => {
    let { location, cuisine, mealtype, lcost, hcost, sort, page } = req.body;

    sort = sort ? sort : 1; 
    page = page ? page : 1; 
    
    let filterObj = {};

    const itemsPerPage = 2;
    const startIndex = page * itemsPerPage - itemsPerPage; 
    const endIndex =  page * itemsPerPage


    // checking incoming values 

    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] = cuisine);
    mealtype && (filterObj["mealtype_id"] = mealtype);
    lcost && hcost (filterObj["lcost"] = lcost) && (filterObj["hcost"] = hcost);

    RestaurentsData.find(filterObj).sort({min_price: sort})
    .then(response => {
        let pageArr = [];
        for( var i=1; i<=Math.ceil(response.length/itemsPerPage); i++){
            pageArr.push(i);
        }
        const filteredRestaurents = response.slice(startIndex, endIndex);
        res.status(200).json({RestaurentsData: filteredRestaurents, pageCount : pageArr, totalRestaurent : response.length})
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}

exports.getRestaurentDetailsById = (req,res) => {
    const { resId } = req.params;

    RestaurentsData.findById( resId )
    .then(response => {
        res.status(200).json({Restaurent: response})
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}