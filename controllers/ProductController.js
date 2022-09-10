const Products = require('../models/Product')

module.exports = class ProductController{
  static async showProducts(req, res){
    const products = await Products.getAllProducts()
    res.render('products/all', {products})
  }

  static createProduct(req, res){
    res.render('products/create')
  }

  static createProductPost (req, res){
    const name = req.body.name
    const image = req.body.image
    const price = req.body.price
    const description = req.body.description

    const product = new Products(name, image, price, description)

    product.save()

    res.redirect('/products')
  }
}

