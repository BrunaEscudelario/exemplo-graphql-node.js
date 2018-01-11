const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const fruits = require('./schema')
const app = express()


app.use('/fruit', graphqlHTTP({schema:fruits, pretty: true}))
app.listen(3000, function () {
  console.log('Server on.')
})