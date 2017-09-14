import server from './lib/server'
// Declare a route
server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${server.server.address().port}`)
})