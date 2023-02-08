const mongoose = require("mongoose")

// Defining Schema
const pageHedingSchema = new mongoose.Schema({
    Page : String,
    Heading: String,
    Subheading: String
})
pageHedingSchema.index({ '$**': 'text' })
// Model

const pageHedingModel = mongoose.model("AllPageHeading", pageHedingSchema) // collection name "TeamMembers"
module.exports = pageHedingModel
