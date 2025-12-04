const express =  require('express')

const route = express.Router()
const homeController = require('../../controller/client/homeController')

route.get('/', homeController.home)


module.exports = route