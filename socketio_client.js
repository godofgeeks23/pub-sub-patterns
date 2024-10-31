const socket = require("socket.io-client")("http://localhost:3000")

// on socket connection
socket.on('connect', () => {
    console.log("Connected to the WebSocket server!")

    console.log("Subscribing to channel: channel1")
    socket.emit('subscribe', 'channel1');

    socket.on('message', (message) => {
        console.log(`Got message: ${message}`)
    })
})
