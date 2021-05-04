// import helper files/util files - we should use a pattern
const findUserProjects = require('./findUserProjects')

module.exports = {
  '/': {
    get: async (req, res) => {
      try {
        console.log(req.params)
        const { id: userId } = req.params

        // logic to only return found user if id is included in params
        // otherwise get all users

        if (userId) {
          // get specific user
          console.log('GET SPECIFIC USER', userId)
        } else {
          // get all users
          console.log('get all users')
        }
        // throw example - 'error message' would show in the catch
        // throw new Error('error message')
        // send dummy data for success response
        res.send({
          user: {
            _id: '5664656866464626',
            name: { first: 'Jim', last: 'Bob' },
            address: {
              street: '1234 loser dr',
              city: 'jabroni',
              state: 'AL',
              zip: '1234',
            },
          },
        })
      } catch (e) {
        console.error(e)
      }
    },
    post: async (req, res) => {
      try {
        const { id: userId } = req.params
        console.log('request body', req.body)
        // throw example -- throw error her if body missing required params
        const missingFields = Object.values(req.body).filter((field) => !field)
        // we obvs wouldn't throw that error but just an example
        // do we want to ever do this in the controller? - this will halt the server - so it would be good to know where things could fail
        throw new Error(`missing required fields ${Object.keys(req.body)}`)
        res.send({
          oi: 'successful post fam',
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
