import server from './lib/server'
import onServerListen from './lib/onServerListen'
import indexRoute from './routes/index'

// Declare a route
server.get('/', indexRoute)

// Run the server!
server.listen(3000, onServerListen)
