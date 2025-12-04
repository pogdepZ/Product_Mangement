const express =  require('express')

const route = express.Router()
const {getHomeProducts, getDetailProduct} = require('../../controller/client/productController')

route.get('/', getHomeProducts)
route.get('/detail/:id',getDetailProduct)

module.exports = route