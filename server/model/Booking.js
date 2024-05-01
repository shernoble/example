// const express=require("express");
const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    patient:String,
    doctor:String,
    // date:Date
});

module.exports=mongoose.model("Booking",bookingSchema);