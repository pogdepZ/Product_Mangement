const express = require('express')
const route = express.Router()

const routeClientHome = require('./homeRoute')
const routeClientProducts = require('./productsRoute')

route.use('/', routeClientHome )
route.use('/products', routeClientProducts)

module.exports = route


