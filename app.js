require("dotenv").config();
const express = require('express');
const cors = require('cors')
const connectDB = require('./config/connectdb.js')
const PageHeadingRoutes = require('./routes/PageHeadingRoutes.js');
const fileUpload = require("express-fileupload");

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
app.use(cors())
connectDB(DATABASE_URL)
app.use(express.json())

// app.use(fileUpload({
//   useTempFiles: true,
//   tempFileDir: '/tmp/',
//   createParentPath: true
// }));

// Load Routes
app.get("/",(req,res)=>{
  res.send("server running")
})

app.use("/", PageHeadingRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
