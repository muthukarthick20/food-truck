const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const product = require('./model/vendor.js')
const goods = require('./model/model.js')


app.post('/register', async (req, res) => {
    const { name, email, password, phone, model, price } = req.body

    await goods.create({ name, email, password, phone, model, price })
        .then(user => { res.json(user) })
        .catch(error => { res.json(error) })
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body

    await goods.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password == password) {
                    return res.json({ Status: "success", email })

                }
                else {
                    return res.json("incorrect password")
                }
            }
            else {
                return res.json("no record found")
            }
        })
        .catch(error => { res.json(error) })
})



app.post('/homepage', async (req, res) => {
    const { email,address, address_2,city, state, zip } = req.body

    await product.create({ email, address, address_2,city, state, zip })
        .then(user => { res.json(user) })
        .catch(error => { res.json(error) })
})

app.post('/vendorproductfind',(req,res) => {
    const {email} = req.body
    product.find({email:email})
    .then(user => { res.json(user) })
    .catch(error => { res.json(error) })
})



mongoose.connect('mongodb://localhost:27017/vendorlist')
    .then(user => { console.log("connect to mongoose") })
    .catch(err => { console.log(err) })
app.listen(3001, () => { console.log("the server is running") })