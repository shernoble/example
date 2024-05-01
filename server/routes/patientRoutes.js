const express=require("express");

const router=express.Router();

const Doctor=require("../model/Doctor");
const Booking=require("../model/Booking");
const Fees=require("../model/Fees");

router.get("/doctors",async(req,res) => {
    // see all the avilable doctors
    try{
        Doctor.find()
        .then(function(results) {
            res.json({success:true,doctors:results});
        })
        .catch(function(err){
            res.json({success:false,error:err});
        })
    }
    catch(error){
        res.json({success:false,error:error});
    }

})

router.post("/book",async(req,res) => {
    try{const id=req.body.docId;
    const name=req.body.name;
    // create booking doc
    Doctor.find({_id:id})
    .then(function(results){
        let doc=results[0];
        let newBooking={
            doctor:doc.name,
            patient:name
        }
        Booking.create(newBooking)
        .then(() => {
            res.json({ success: true, msg: 'Entered new booking', err: null });
        })
        .catch((err) => {
            res.json({ success: false, err: err });
        });
    })}
    catch(error){
        res.json({success:false});
    }
})

router.post("/updateemail",async(req,res) => {
    try{
        
    }
    catch(err){

    }
})

router.get("/bookings",async(req,res) => {
    try{
        Booking.find()
        .then(function(results){
            res.json({success:true,bookings:results});
        })
        .catch(function(err){
            res.json({success:false,error:err})
        })
    }
    catch(err){
        res.json({success:false,error:err})
    }
})

router.get("/profile",async(req,res) =>{

})

router.post("/doctor/:id",async(req,res) => {
    // book appointment
})

router.post("/payment",async(req,res) => {

})

router.post("/details",async(req,res) =>{

})

module.exports=router;