const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios')
const { json, urlencoded } = bodyParser

const app = express()

app.disable('x-powered-by')

app.use(cors()) // cross origin resource sharing - allows us to talk to api
app.use(json()) // req.body on request
app.use(urlencoded({ extended: true })) // query string ?userId=32352345 accessible on req
app.use(morgan('dev')) // server log with time of request

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

// middleware example

const log = (req, res, next) => {
  console.log('logging middleware')
  // next fn continues to controller or next middleware
  next()
}

// have the entire server run log before every request, or add next as second arg to controller fn
// app.use(log);
// middleware example for auth
// see if below is possible
// app.use([log, auth, redirect, ...etc])

app.post('/', log, (req, res) => {
  // can also pass an array of middleware
  // const log = (req, [log, log, log], next) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

const start = () => {
  app.listen(3000, () => {
    console.log('server running on 3000')
  })
}

module.exports = {
  start,
  app,
}
