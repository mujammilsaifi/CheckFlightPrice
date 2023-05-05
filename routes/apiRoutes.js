const express=require("express");
const { checkPriceController, filghtDataController } = require("../controllers/apiController");

const router=express.Router();

router.post('/price',checkPriceController);
router.post('/data',filghtDataController);


module.exports=router;