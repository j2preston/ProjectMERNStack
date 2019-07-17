const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Create the Schema for dates
const DateSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    },
    cars: {
        type: [],
    },
    holiday:{
        type: Boolean,
        default:false
    },
})
module.exports = Datex = mongoose.model("dates", DateSchema)


/**DATEX AS DATE IS ALREADY A CLASS IN JS*/