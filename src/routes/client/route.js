const routeClient = require('./index')
module.exports = (app)=>{
    app.use('/', routeClient)
}