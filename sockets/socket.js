const { io } = require("../app")

io.on('connection', client => {
  console.log('Client connected')

  client.on('disconnect', () => {
    console.log('Client disconnected')
  })

  client.on('message-html', (payload) => {
    console.log({ payload })
    io.emit('message-html', { admin: 'New SMS!' })
  })
})