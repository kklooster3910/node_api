const express = require('express')
const userController = require('./user.controller')

// define user router
const userRouter = express.Router()

userRouter.get('/user/:id', userController['/'].get)

module.exports = userRouter
