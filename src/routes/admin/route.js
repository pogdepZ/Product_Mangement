const routeAdmin = require('./index')
module.exports = (app) => {
  app.use('/admin', routeAdmin)
}