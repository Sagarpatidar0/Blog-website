const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

mongoose.connect(process.env.MONG0_URL,
    {
        dbName: "blogapi",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err)=> err?console.log(err):console.log("Mongodb connected"));

    module.exports;

