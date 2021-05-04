// some route examples in here to clean up

// app.get('/', (req, res) => {
//   res.send({ message: 'hello' })
// })

// middleware example

const log = (req, res, next) => {
  console.log('logging middleware')
  // next fn continues to controller or next middleware
  next()
}

// name middleware after what it does
// ig: demoUserAuth - to be imported into the `user.route.js` file and added as middleware
// this way we can separate the routers per each controller and have middleware specific for each
// and also be able to apply globalmiddleware to the app as desired
// const demoUserAuth = (req, res, next) => {
// do some auth stuff for demo users
// }

// have the entire server run log before every request, or add next as second arg to controller fn
// app.use(log);
// middleware example for auth
// see if below is possible
// app.use([log, auth, redirect, ...etc])

// USE CASE EXAMPLE
app.post('/', log, (req, res) => {
  // can also pass an array of middleware
  // const log = (req, [log, log, log], next) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})
