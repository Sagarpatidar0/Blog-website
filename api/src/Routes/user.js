const express = require("express");
const { deleteModel } = require("mongoose");
const router = express.Router();
const user = require("../Models/User")

// Update user 
router.put("/user/:id",async (req, res)=>{
    if(req.body.userId === req.params.id){
        try {
            const updatedUser =await user.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            const {password , ...dataToSend} = updatedUser._doc
            res.status(200).json(dataToSend)
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("You can only update your account!");
    }
})

// Delete User
router.delete("/user/:id",async (req,res)=>{
    if(req.params.id){
        try {
            await user.findByIdAndDelete(req.params.id);
            res.status(200).json("User deleted..")
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("You can only delete your account!")
    }
})
module.exports = router;