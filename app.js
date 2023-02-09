require("dotenv").config();
const express = require('express');
const cors = require('cors')
const connectDB = require('./config/connectdb.js')
const PageHeadingRoutes = require('./routes/PageHeadingRoutes.js');

const multer = require("multer");

const fs = require("fs");

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
app.use(cors())
connectDB(DATABASE_URL)
app.use(express.json())

// file upload

app.use(express.static('uploads'))
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/uploadfile", upload.single("file"), (req, res) => {
  res.send({ status: "success", message: "file uploaded Successfully", url: `http://localhost:8080/${req.file.filename}` })
});




// Load Routes
app.get("/",(req,res)=>{
  res.send("server running")
})

app.use("/", PageHeadingRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
