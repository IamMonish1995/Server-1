const mongoose = require("mongoose")

// Defining Schema
const teamMemberSchema = new mongoose.Schema({
    Name: String,
    Designation: String,
    Description: String,
    Image: String
})
teamMemberSchema.index({ '$**': 'text' })
// Model

const teamMemberModel = mongoose.model("TeamMembers", teamMemberSchema) // collection name "TeamMembers"
module.exports = teamMemberModel
