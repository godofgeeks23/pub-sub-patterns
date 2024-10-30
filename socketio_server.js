const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

// root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("server listening at port 3000");
});

// when connection is established
io.on("connection", (socket) => {
  console.log("new client connected!");

  // subscribe to a channel
  socket.on("subscribe", (channel) => {
    console.log(`Subscribing to channel: ${channel}`);
    socket.join(channel);
  });

  socket.on("unsubscribe", (channel) => {
    console.log(`leaving channel: ${channel}`);
    socket.leave(channel);
  });

  setInterval(() => {
    io.to("channel1").emit("message", "Hello from channel1!");
    io.to("channel2").emit("message", "Hello from channel2!");
  }, 3000);
});
