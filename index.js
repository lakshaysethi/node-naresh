const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.connect("mongodb://root:example@localhost:27017/school/")

.then(()=>{
    console.log("connection successful")
})
.catch((err)=>console.log("error",err))

// user schema
const userSchema = new  mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},

})
 
const userModel = new mongoose.model("user",userSchema)

const app = express()
app.use(express.json())
app.use(cors())

app.get("/users",(req, resp)=>{
    userModel.find()
    .then((data)=>{
        resp.send(data)
    })
    .catch(err=>console.log(err))

})


app.listen(7000)