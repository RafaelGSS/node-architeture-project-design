
require('dotenv').config()

const path = require('path')
const app = require('express')()

const registerRoutes = require('./config/routes')
const port = process.env.PORT || 3000

// Base response middleware
app.use(require('./src/middlewares'))

// Boot routes
registerRoutes(app, path.join(__dirname, './src/routes'))

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})