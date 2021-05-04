module.exports = {
  '/': {
    get: async (req, res) => {
      console.log('user get')
      console.log(req.params)
      // console.log(req)
      res.send({
        user: { _id: '5664656866464626', name: { first: 'Jim', last: 'Bob' } },
      })
    },
  },
}
