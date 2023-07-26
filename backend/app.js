const express = require("express")
const cors = require("cors")
const userRoute = require("./route/userRoute")
const product = require("./route/productRoute")
const dotenv = require("dotenv").config()
require("./config/dbConnection")
const app = express()

const Port = process.env.port || 8000


app.use(express.json())
app.use(cors())
app.use(userRoute)
app.use(product)


app.listen(Port,()=>{
    console.log(`server is running on port:-${Port}`)
})