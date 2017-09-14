import server from './lib/server'
import onServerListen from './lib/onServerListen'
// Declare a route
server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen(3000, onServerListen)