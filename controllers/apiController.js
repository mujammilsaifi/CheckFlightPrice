const flightModel=require('../models/flightModel'); //DATABASE MODEL


//TO FIND PRICE RESULT HANDLE HERE
exports.checkPriceController=async(req,res)=>{
    try {
        const {source,destination,date}=req.body;
        const Prices= await flightModel.findOne({source:source,destination:destination,date:date});
        res.status(200).send({
            message:"prices get successfully",
            Prices
        })
    } catch (error) {
        console.log(error);
        return res.status(201).send({
            message:"error in geting price data"
        })
    }
}

//DATABASE CREATED 
exports.filghtDataController=async(req,res)=>{
    try {
        const {indigoPrice,airAsiaPrice,vistaraPrice,source,destination,date}=req.body;
        const data=await flightModel.create({indigoPrice,airAsiaPrice,vistaraPrice,source,destination,date});
        res.status(400).send({
            message:"data submited successfully",
            data
        })
    } catch (error) {
        console.log(error);
        return res.status(404).send({
            message:"error in adding data"
        })
    }
}


