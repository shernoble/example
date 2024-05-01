const mongoose=require("mongoose");

const patientSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:{
        type:Number,
        default:20
    },
    nurse:String,//nurse's name/email
    sex:{
        type:String,
        default:"female"
    },
    diagnosis:{
        type:String,
        default:null
    }

})

module.exports=mongoose.model('Patient',patientSchema);