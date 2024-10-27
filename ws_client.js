const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.onopen = function () {
  console.log("Connected to server");
};

ws.onmessage = function (event) {
  console.log("Received message - ", event.data);
};

ws.onclose = function () {
  console.log("Connection closed");
};
