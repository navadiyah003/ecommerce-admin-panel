const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

mongoose.connect(`mongodb://${process.env.databaseHost}:${process.env.databasePort}/${process.env.databaseName}`).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose