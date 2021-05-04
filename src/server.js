const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios')
const { json, urlencoded } = bodyParser
// route imports
const userRouter = require('./user/user.route')

const app = express()

app.disable('x-powered-by')

app.use(cors()) // cross origin resource sharing - allows us to talk to api
app.use(json()) // req.body on request
app.use(urlencoded({ extended: true })) // query string ?userId=32352345 accessible on req
app.use(morgan('dev')) // server log with time of request

// api routes
app.use(userRouter)

const start = async () => {
  try {
    app.listen(3000, () => {
      console.log('server running on 3000')
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  start,
  app,
}
