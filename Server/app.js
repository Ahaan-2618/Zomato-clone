const express = require("express");
const router = require("./Router/index");
const _ = require("lodash");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const DbUrl = ("mongodb+srv://zomato_clone:yrRQi2cOkin42dgV@cluster0.o43y0.mongodb.net/zomato_DB?retryWrites=true&w=majority", { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
    });
    

app.use(cors({
    origin: "*", // Incoming URL request for specific URL http://127.0.0.1:5500
    methods : ["GET", "POST"] //now request can only get or post not put or delete
}));
// app.options("*", cors());

app.use(express.json());
app.use("/", router); 

mongoose.connect("mongodb+srv://zomato_clone:yrRQi2cOkin42dgV@cluster0.o43y0.mongodb.net/zomato_DB?retryWrites=true&w=majority", { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
    })
.then(res => {
    app.listen(3001, function(){
        console.log("Server is running on PORT 3001");
    });
})
.catch(err => console.log(err));


