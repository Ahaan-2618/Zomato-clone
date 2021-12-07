const express = require("express");
const route = express.Router();

const locationController = require("../Controllers/locations");
const mealType = require("../Controllers/MealTypes");
const restroType = require("../Controllers/Restaurent");
const menuItems = require("../Controllers/Items");
const userData = require("../Controllers/Users")
const _ = require("lodash");

route.get("/", function(req, res){
    // we are writing status code 
    res.writeHead(200, {"content-type" : "text/plain"});
    res.write("Welcome to Landing Page");
    res.end();
});

route.get("/location", locationController.getLocations); //Working

route.get("/mealtypes", mealType.getAllMeal);  //Working

route.get("/restaurents/:LocID", restroType.RestaurentsData); //Working

route.post("/filter", restroType.RestaurentFilter); //working

route.get("/restaurent/:resId", restroType.getRestaurentDetailsById); //working

route.get("/menuitems/:resId", menuItems.getMenuByResId); //working

route.post("/usersignup", userData.userSignUp);

route.get("/login", userData.userLogin);

// pending tasks
// create order API
// fetch order API
// JWT authentication
// change password API
// forget password via email 
// SMS OTP in express or node  
// admin panel , add menu or add new restaurents 


route.get("*", function(req,res){
    res.writeHead(404, {"content-type" : "text/plain"});
    res.write("Resource not found !");
    res.end();
});

module.exports = route;
