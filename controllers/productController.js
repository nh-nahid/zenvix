const { getAllProducts, getProductById, deleteProductDB, createProductDB } = require("../model/productModel");

const getProducts = (req, res) => {
    const products = getAllProducts();

    res.status(200).json({
        success: true,
        products
    })
}

const getProduct = (req, res) => {
    const id = Number(req.params.id);

    const product = getProductById(id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}

const createProduct = (req, res) => {
    const {name, price, stock} = req.body

    if(!name || price === undefined || stock === undefined){
        return res.status(400).json({
            success: true,
            message: "Name, price and stock are required!"
        });
    }

    if(price <= 0){
        res.status(400).json({
            success: false,
            message: "Price must be greater than 0!"
        })
    }

    if(stock <0){
        res.status(400).json({
            success: false,
            message: "Stock must be greater than 0"
        });
    }

    const products = getAllProducts();

    const newProduct = {
        id: crypto.randomUUID(),
        name,
        price,
        stock
    }

    const product = createProductDB(newProduct);

    res.status(201).json({
        success: true,
        message: "Product created successfully!",
        product
    });
}

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const deletedProduct = deleteProductDB(id);

    if(!deletedProduct){
        return res.status(404).json({
            success: false,
            message: "Product not found!"
        });
    }

    res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        product: deletedProduct
    })
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct
}