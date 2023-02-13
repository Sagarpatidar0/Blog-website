const express = require("express");
require("./src/config/mongo");
const authroute = require("./src/Routes/auth") 
const postroute = require("./src/Routes/post") 
const userroute = require("./src/Routes/user") 
const cors = require('cors')
const multer = require('multer')
const bodyparser = require('body-parser')
const path = require('path')
const app = express();
app.use(bodyparser.urlencoded({ extended:true }));
app.use(cors())
app.use(express.json())
app.use("/uploads",express.static(path.join(__dirname, '/uploads')))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname);}
    });
    const upload = multer({ storage: storage });

    app.post("/api/upload", upload.single('file'), (req, res)=> {
        console.log(req.file.filename)
        res.status(200).json(req.file.filename)
    })

app.use("/api",authroute);
app.use("/api",postroute);
app.use("/api",userroute);

app.listen(5000, (err) =>
    err ? console.log(err) :
        console.log("app running on port 5000"));
