const mongoose = require('mongoose')
const muthu = new mongoose.Schema({
    email: String,
    address: String,
    address_2: String,
    city: String,
    state: String,
    zip: Number
})

const vendorproduct = mongoose.model('vendorlist',muthu)
module.exports = vendorproduct