const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    category:{type:String},
    userId:{type:String}
})

module.exports = mongoose.model("Product",productSchema)



