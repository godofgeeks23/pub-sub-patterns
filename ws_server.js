const web_socket = require('ws');

const web_server_server = new web_socket.Server({ port:8080});

let clients = [];

web_socket_server.on('connection', function connection(ws){

    clients.push(ws);
    console.log('New client connected');

    ws.on('message', function incoming(message) {
        console.log("Received message - ", message);
        clients.forEach(function(client){
            if(client !== ws){
                client.send(message);
            }
        });
    });
})
