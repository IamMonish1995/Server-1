const mongoose = require("mongoose")

// Defining Schema
const iconsSchema = new mongoose.Schema({
    IconName: String
})
iconsSchema.index({ '$**': 'text' })
// Model

const iconsModel = mongoose.model("allIcons", iconsSchema)
module.exports = iconsModel
