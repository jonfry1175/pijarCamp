const productRoute = require('express').Router()

const ProductController = require('../controller')

productRoute.get("/", ProductController.getProducts)
productRoute.post("/create", ProductController.create)
productRoute.delete("/delete/:id", ProductController.delete)
productRoute.put("/update/:id", ProductController.update)

module.exports = productRoute
