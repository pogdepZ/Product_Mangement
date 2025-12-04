require('dotenv').config();
const express = require('express')
const connect = require('./config/db')
const routeAdmin = require('./routes/admin/route')
const routeClient = require('./routes/client/route')
const app = express()
const port = process.env.port
const setConfig = require('./config/viewEngine')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(methodOverride('_method'))


connect()
setConfig(app)

routeAdmin(app)
routeClient(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

