const { Product } = require('../models')
const productRoute = require('../routes/productRoutes')

class ProductController {
    static getProducts(req, res) {
        res.send("get products")
    }
    static create(req, res) {
        res.send("create page")
    }
    static delete(req, res) {
        res.send("delete page")
    }
    static update(req, res) {
        res.send("update page")
    }
}

module.exports = ProductController;