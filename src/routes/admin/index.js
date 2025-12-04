const express = require('express')
const route = express.Router()

const dashBoardRoute = require('./dashBoardRoute')
const productsRoute = require('./productsRoute')

route.use('/dashboard', dashBoardRoute)
route.use('/products', productsRoute)


module.exports = route