const mongoose = require("mongoose")

const Postschema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    disc:{
        type:String,
        required:true,
    },
    cat:{
        type:Array,
    },
    img:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("Post",Postschema);