const express = require("express")
const router = express.Router();
const user = require("../Models/User")

router.post("/register",async(req,res)=>{
    try {
        const newUser = new user({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        })
        const User = await newUser.save();
        res.status(200).json(User)
        console.log(User);      
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
})

// Login

router.post("/login",async(req,res)=>{
try {
    const User = await user.findOne({username: req.body.username})
    if (User && req.body.password === User.password) {
        const {password, ...other} = User._doc
        res.status(200).json(other);
    }else{
        res.status(400).json("Wrong Username or Password"); 
    }
} catch (err) {
    res.status(500).json(err)
}
})

module.exports = router;