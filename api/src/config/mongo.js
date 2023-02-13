const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

mongoose.connect("mongodb://localhost:27017/",
    {
        dbName: "blogapi",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err)=> err?console.log(err):console.log("Mongodb connected"));

    module.exports;

