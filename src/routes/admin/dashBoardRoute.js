const express = require('express')

const route = express.Router()
const dashBoardController = require('../../controller/admin/dashBoardController')

route.get('/', dashBoardController)


module.exports = route