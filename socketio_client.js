const socket = require("socket.io-client")("http://localhost:3000")

socket.on('connect', () => {
    console.log("connected to web socket server!")

    socket.emit('subscribe', 'channel1');

    socket.on('message', (message) => {
        console.log(`Got message: ${message}`)
    })
})
