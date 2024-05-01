const mongoose=require("mongoose");

const nurseSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    patients:[String],
})

module.exports=mongoose.model('Nurse',nurseSchema);