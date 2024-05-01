const express=require("express");

const router=express.Router();
const Admin=require("../model/Admin");
const Doctor=require("../model/Doctor");


router.post('/login', async (req, res) => {
    try {
        const user = req.body; // Use req.body directly to get the new user data
        console.log(user);
        
        // Use create() method directly to create a new user
        // User.create(newUser)
        Admin.find({name:user.name})
        .then((response) => {
            if(response.len!=0)
            res.json({ success:true,user:response });
        })
        .catch((err) => {
            res.json({ success: false,msg:'error in login', err: err });
        });
    } catch (error) {
        res.json({success:false, error: error });
    }
    });

router.post("/register",async(req,res) => {
    try {
        const newUser = req.body; // Use req.body directly to get the new user data
        console.log(newUser);
        
        // Use create() method directly to create a new user
        Admin.create(newUser)
        .then(() => {
            res.json({ success: true, msg: 'Entered new user', err: null });
        })
        .catch((err) => {
            res.json({ success: false, err: err });
        });
    } catch (error) {
        res.json({ success:false,error: error });
    }
});

router.get("/doctors",async(req,res) => {
    try{
        Doctor.find()
        .then(function(results){
            res.json({success:true,list:results,error:null});
        })
        .catch(function(err){
            res.json({ success: false, error: err });
        });

    }
    catch(error){
        res.json({ success:false,error: error });
    }

})

router.get("/patients",async(req,res) => {

})

router.get("/nurses",async(req,res) => {

})

router.post("/delete/doctor",async(req,res) => {
    try{
        const id=req.body.id;
        const deletedDoc=await Doctor.findByIdAndDelete(id);
        if(!deletedDoc) res.json({success:false});
        else res.json({success:true});
    }
    catch(err){

    }
})
// router.post("/delete/patient")
module.exports=router;
