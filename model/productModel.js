const products = [
  { "id": 1, "name": "Wireless Mouse", "price": 850, "stock": 25 },
  { "id": 2, "name": "Mechanical Keyboard", "price": 4200, "stock": 10 },
  { "id": 3, "name": "USB-C Hub", "price": 1600, "stock": 0 },
  { "id": 4, "name": "Laptop Stand", "price": 1200, "stock": 15 },
  { "id": 5, "name": "Webcam HD", "price": 3500, "stock": 8 }
]

const getAllProducts = () => {
    return products
}

const getProductById = (id) => {
    return products.find((product) => product.id === id)
}


const createProductDB = (product) => {
    products.push(product);
    return product
}

const deleteProductDB = (id) => {
    const index = products.findIndex((product) => product.id ===id);

    if(index === -1){
        return null
    }

    const deleteProduct = product.splice(index, 1);

    return deleteProduct[0]
}

module.exports = {
    getAllProducts,
    getProductById,
    createProductDB,
    deleteProductDB
}