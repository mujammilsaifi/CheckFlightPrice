const mongoose=require("mongoose");
const colors=require("colors");

const connectDB=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected Successfully ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Mongoose Datatbase Error: ${error}`.bgRed.white);
    }
}
module.exports =connectDB;