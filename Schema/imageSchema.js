const mongoose = require("mongoose")

// Defining Schema
const imageSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
})
imageSchema.index({ '$**': 'text' })
// Model

const imageModel = mongoose.model("allImage", imageSchema)
module.exports = imageModel
