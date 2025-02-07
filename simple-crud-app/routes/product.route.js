const express = require('express')
const router = express.Router()
const {
    getProducts,
    createProduct,
    updateProductById,
    deleteProductById,
    getProductBtId
} = require('../controllers/product.controllers.js')


// router.get('/',getProducts)

// router.get('/:id',getProductBtId)

// router.put('/:id',updateProductById)

// router.post('/',createProduct)

// router.delete('/:id',deleteProductById)

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getProductBtId).put(updateProductById).delete(deleteProductById)

module.exports = router