const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profile_pic:{
        type:String,
        default:"1674905903492blank.png",
    }
},{timestamps:true})

module.exports = mongoose.model("User",Userschema);