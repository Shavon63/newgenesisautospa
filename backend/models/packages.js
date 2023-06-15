const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const PackagesSchema = new Schema({
    name: {type: String, required: true},
    duration: String,
    price: {type: String, required: true},
    description: {type: String, required: true}
})


const Packages = mongoose.model("Packages", PackagesSchema)
module.exports = Packages 