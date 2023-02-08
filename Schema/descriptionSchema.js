const mongoose = require("mongoose")

// Defining Schema
const descriptionSchema = new mongoose.Schema({
    Icon : String,
    Title : String,
    Description : String
})
descriptionSchema.index({ '$**': 'text' })
// Model

const descriptionModel = mongoose.model("allDescription", descriptionSchema)
module.exports = descriptionModel
