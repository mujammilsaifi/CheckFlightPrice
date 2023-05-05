const express=require("express");
const BodyParser=require("body-parser");
const cors=require("cors");
const morgan =require("morgan");
const colors=require("colors");
const dotenv=require("dotenv");
const connectDB = require("./config/Db");
const apiRoute=require('./routes/apiRoutes')
const path =require("path");
//DOTENV
dotenv.config();

//DATABSE CONNECTION
connectDB();

// REST OBJECT
const app=express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'./client/build')));

//API ROUTES 
app.use("/api/v1/flight",apiRoute);

const PORT=process.env.PORT 
//LISTEN SERVER
app.listen(8080,()=>{
    console.log(`Server Running Development mode on Port No. ${PORT}`.bgCyan.white);
})