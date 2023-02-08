const mongoose = require("mongoose")

// Defining Schema
const imageSchema = new mongoose.Schema({
    Image: String
})
imageSchema.index({ '$**': 'text' })
// Model

const imageModel = mongoose.model("allDescription", imageSchema)
module.exports = imageModel
