const { Product } = require("../models");
const productRoute = require("../routes/productRoutes");

class ProductController {
  static getProducts(req, res) {
    Product.findAll({
        order: [
            [
                'id', "asc" // supaya id berurutan
            ]
        ]
    })
        .then((result) => {
            res.status(200).json(result)
        });
  }
  static create(req, res) {
    const {name, status, price, stock, image} = req.body
    Product.create({
        name,
        status,
        price,
        stock,
        image
    })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
  }
  static delete(req, res) {
    const id = Number(req.params.id)
    Product.destroy({
        where: { id },
    })
    .then((result) => {
        result === 1 // done
            ? res.status(200).json({
                message: `succes deleted id product ${id}!`
            })
            : res.status(400).json({
                message: `Product id ${id} is not defined!`
            })
            
    })
    .catch((err) => {
        res.status(500).json(err)
    })
  }
  static update(req, res) {
    const id = Number(req.params.id)
    const { name, status, price, stock, image } = req.body
    Product.update({
        name,
        status,
        price,
        stock,
        image
    }, {
        where: { id }
    })
    .then((result) => {
        result[0]
            ? res.status(201).json({
                message: `succes update id product ${id}`
            })
            : res.status(400).json({
                message: `id product ${id} is not defined!`
            })
    })
    .catch((err) => {
        res.status(500).json(err)
    })
  }
}

module.exports = ProductController;
