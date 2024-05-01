const mongoose=require("mongoose");

const doctorSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    patients:[String],
    speciality:String
})

module.exports=mongoose.model('Doctor',doctorSchema);