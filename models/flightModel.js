const mongoose=require("mongoose");

//MODELS
const flightSchema = new mongoose.Schema({
    indigoPrice:{
        type:Number,
        
    },
    airAsiaPrice:{
        type:Number,
        
    },
    vistaraPrice:{
        type:Number,
        
    },
    source:{
        type:String,
    },
    destination:{
        type:String,
       
    },
    date:{
        type:String,
    }
});

const Flight=mongoose.model("Flight",flightSchema);

module.exports=Flight;