const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Create the Schema for cars
const CarSchema = new Schema({
    type: {
        type: String,
        required:true
    },
    model: {
        type: String,
        required: true
    },
    noDoors: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    }
})
module.exports = Car = mongoose.model("cars", CarSchema)