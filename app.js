require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT

// Node Server
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)
require('./sockets/socket')

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Hi form scratch'
  })
})

server.listen(port, (err) => {
  if (err) throw new Error(err)
  console.log(`Listen on http://127.0.0.1:${port}`)
})
