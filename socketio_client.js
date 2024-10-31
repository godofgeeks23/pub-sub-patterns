const socket = require("socket.io-client")("http://localhost:3000")

// on socket connection
socket.on('connect', () => {
    console.log("Connected to the WebSocket server!")

    
    socket.emit('subscribe', 'channel1');

    socket.on('message', (message) => {
        console.log(`Got message: ${message}`)
    })
})
