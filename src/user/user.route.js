const express = require('express')
const { get } = require('lodash')
const userController = require('./user.controller')

// define user router
const userRouter = express.Router()

userRouter
  .route('/user')
  .get(userController['/'].get)
  .post(userController['/'].post)
userRouter.route('/user/:id').get(userController['/'].get).put().delete()

module.exports = userRouter
