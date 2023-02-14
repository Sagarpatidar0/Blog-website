const mongoose = require("mongoose")

const Userschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true, 'Username must be unique.'],
    },
    email:{
        type:String,
        required:true,
        unique: [true, 'Email must be unique.'],
        lowercase: true
    },
    password:{
        type: String,
        required: [true, 'Password is required.'],
        minlength: [8, 'Password must have at least 8 characters.']
    },
    profile_pic:{
        type:String,
        default:"1674905903492blank.png",
    }
},{timestamps:true})

module.exports = mongoose.model("User",Userschema);