const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const CostumerModel = require('./models/Costumer')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/costumer");

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  CostumerModel.findOne({email: email})
  .then(user => {
    if(user) {
       if(user.password === password) {
         res.json("Success")
       } else {
        res.json("the password is incorrect")
        
       }
    }  else {
        res.json("No record existed")
    }
  }) 
})

app.post('/register', (req, res) => {
     
    const { email} = req.body;

    CostumerModel.findOne({email: email})
    .then(user => {
        if(user) {
       res.json('Already have an account')
       } else {

        CostumerModel.create(req.body)
        .then(costumers => res.json(costumers))
         .catch(err  => res.json(err))
       }

  }) .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("server is running")
})