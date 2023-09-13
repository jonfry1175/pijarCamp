const productRoute = require('express').Router()

const ProductController = require('../controller')

productRoute.get("/", ProductController.getProducts)
productRoute.get("/create", ProductController.create)
productRoute.get("/delete", ProductController.delete)
productRoute.get("/update", ProductController.update)



module.exports = productRoute
