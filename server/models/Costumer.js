const mongoose = require('mongoose')

const  CostumerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const CostumerModel =  mongoose.model("costumers", CostumerSchema)
module.exports = CostumerModel
