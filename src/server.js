const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios')
const { json, urlencoded } = bodyParser

const app = express()
// const router = app.router

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev')) // not sure what this does yet, was in the femasters tutorial

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/', (req, res) => {
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
