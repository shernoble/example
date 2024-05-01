// const express=require("express");
const mongoose=require("mongoose");

const feeSchema=new mongoose.Schema({
    context:String,
    amount:Number,
    doctor:String,
    nurse:String,
    date:Date
});

module.exports=mongoose.model("Fee",feeSchema);