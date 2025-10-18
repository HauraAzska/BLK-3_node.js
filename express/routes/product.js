const express = require("express")
const routes = express.Router()
const controller = require("../contollers/productControllers")

routes.get('/', controller.getAllProduct)
routes.get('/:id', controller.getProductById)
routes.post('/', controller.createProduct)
routes.put('/:id', controller.updateProduct)
routes.delete('/:id', controller.deleteProduct)

module.exports=routes