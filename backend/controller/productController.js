const Product = require("../model/product")

const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, userId } = req.body
        console.log("hello...............", req.body)
        if (!name) {
            return res.send({ message: "name is required..", statusCode: 400 })
        }
        if (!description) {
            return res.send({ messge: "description.is required", statusCode: 400 })
        }
        if (!price) {
            return res.send({ message: "price is required.", statusCode: 400 })
        }
        if (!category) {
            return res.send({ message: "category is required", statusCode: 400 })
        }
        const data = await Product({
            id: req.body.id,
            name: name,
            description: description,
            price: price,
            category: category,
            userId: userId
        })
        const result = await data.save()
        res.send(result)

    } catch (err) {
        res.send(err)
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.send(product)

    } catch (err) {
        res.send(err)
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)

    } catch (err) {
        res.send(err)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.send(product)

    } catch (err) {
        res.send(err)
    }
}

const updateProduct = async (req, res) => {
    try {
        console.log(req.params)
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(product)

    } catch (err) {
        console.log(err)
        res.send(err)
    }
}

const searchProduct = async (req, res) => {
    try {
        const product = await Product.find({ "$or": [
            { name: { $regex: req.params.key } },
            { description: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
            
        ] })
        if(!product){
            return res.send({message: "Product not found", statusCode:400})
        }
        res.send(product)

    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    getProductById,
    searchProduct


}