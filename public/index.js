var socket = io()

socket.on('connect', function () {
  console.log('Client Connected - HTML')
})

socket.on('diconnect', function () {
  console.log('Client disconnected - HTML')
})

socket.emit('message-html', { name: 'Brandon', source: 'Browser' })
socket.on('message-html', function (payload) {
  console.log({ payload })
})

const name = document.getElementById('name_txt')
const content = document.getElementById('content')
const btn_send = document.getElementById('btn_send')

btn_send.addEventListener('click', (ev) => {
  content.textContent = name.value
  socket.emit('name-html', { name: name.value, source: 'LALA' })
})
