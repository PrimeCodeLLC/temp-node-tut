const Product = require('../models/product.model.js')

// get all products controller
const getProducts = async (req,res) =>{
    try {
      const products =  await Product.find({});
      res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

/// get product by id controller
const getProductBtId = async (req,res) =>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// update product by id controller
const updateProductById = async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);

        if(!product){
            return res.status(404).json({"message": "Product not found"})
        }

        const updatedProduct = await Product.findById(req.params.id)

        res.status(200).json(updatedProduct)
        // const products = await Product.
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// delete product by id controller
const deleteProductById = async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            return res.status(404).json({"message": "Product not found"})
        }

        res.status(200).json({"message": "product delete successfully"})
        // const products = await Product.
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// create product
const createProduct = async (req,res)=>{
    try {
       const product = await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

module.exports = {
    getProducts,
    createProduct,
    updateProductById,
    deleteProductById,
    getProductBtId
}
