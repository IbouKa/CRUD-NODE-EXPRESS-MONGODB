const Product = require('../models/product.model.js')
const mongoose = require('mongoose')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: "Product id does not valid" })
        } else {
            const product = await Product.findById(id)
            console.log(product);
            if (!product) {
                res.status(404).json({ message: "Product id does not exist" })
            } else {
                console.log(product);
                res.status(200).json(product)
            }

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const uptdateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: "Product id does not valid" })
        } else {
            var product = await Product.findByIdAndUpdate(id, req.body)
            if (!product) {
                res.status(404).json({ message: "Product id does not exist" })
            } else {
                product = await Product.findById(id)
                res.status(200).json(product)
            }

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//DELETE METHODS
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: "Product id does not valid" })
        } else {
            var product = await Product.findByIdAndDelete(id, req.body)
            if (!product) {
                res.status(404).json({ message: "Product id does not exist" })
            } else {
                res.status(200).json({ message: "Delete is success" })
            }

        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getProducts, getProductById, addProduct, uptdateProduct, deleteProduct }