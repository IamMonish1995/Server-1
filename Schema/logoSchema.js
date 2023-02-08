const mongoose = require("mongoose")

// Defining Schema
const logoSchema = new mongoose.Schema({
    LogoName: String
})
logoSchema.index({ '$**': 'text' })
// Model

const logoModel = mongoose.model("allLogo", logoSchema)
module.exports = logoModel
