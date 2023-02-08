const mongoose = require("mongoose")

// Defining Schema
const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
})
userSchema.index({ '$**': 'text' })
// Model

const usersModel = mongoose.model("users", userSchema) // collection name "userss"
module.exports = usersModel