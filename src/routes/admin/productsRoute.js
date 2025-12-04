const express = require('express')

const upload = require('../../helper/uploadMiddlewaare')

const route = express.Router()
const controllerAdmin = require('../../controller/admin/productsController')
const validateFormCreate = require('../../validate/admin/validate.form')

route.get('/', controllerAdmin.productList)

route.patch('/change-status/:id/:status/', controllerAdmin.changeStatus)
route.patch('/change-status-multi/', controllerAdmin.changeStatusMulti)
route.delete('/delete/:id',  controllerAdmin.deleteItem)
route.get('/create', controllerAdmin.create)
route.post('/create', upload.single('thumbnail') , validateFormCreate, controllerAdmin.postProduct)
route.get('/detail/:id', controllerAdmin.detail)
module.exports = route