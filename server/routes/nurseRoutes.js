const express=require("express");

const router=express.Router();

const Patient=require("../model/Patient");
const Nurse=require("../model/Nurse");



router.get("/patients/:name",async(req,res) => {
    // only the patients that they work for
    try{const {name}=req.params;
        console.log("name:",name);
    Patient.find({nurse:name})
    .then(function(results){
        console.log(results);
        res.status(200).send({patients:results});
    })
    .catch(function(error){
        // console.log(error);
        return res.status(500).send({message:error.message || "Error Occured"});
    })}
    catch(err){
        return res.status(500).send({message:error.message || "Error Occured"});
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = req.body; // Use req.body directly to get the new user data
        console.log(user);
        
        // Use create() method directly to create a new user
        // User.create(newUser)
        Nurse.find({name:user.name})
        .then((response) => {
            // console.log(response);
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


module.exports=router;