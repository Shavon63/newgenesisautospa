const mongoose = require("mongoose")
const Schema= mongoose.Schema 

const ServicesSchema = new Schema({
    image: String,
    name: {type: String, required: true}, 
    description: {type: String, required: true}
}) 

const Services = mongoose.model("Services", ServicesSchema)
module.exports = Services