require('dotenv').config()

const express = require('express')

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = process.env.PORT || 4000

const routes = require('./src/routes/routes')
const middlewares = require('./src/routes/middlewares')

app.use(middlewares)
app.use(routes)

app.listen(port, function() {
    console.log(`Server has started on http://localhost:${port}`)
})