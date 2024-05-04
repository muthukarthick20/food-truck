const mongoose = require('mongoose')
const items= new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    model: String,
    price: Number
})
const model=mongoose.model('vendordata',items,'list')
module.exports=model