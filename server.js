const express = require("express");
const socket = require("socket.io");
const http = require("http");

const app = express();
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);

app.use(express.static("public"));

// SOCKET SETUP
const io = socket(server);

// SOCKET EVENTS
io.on("connection", (socket) => {
  console.log("Made socket connection", socket.id);
});

// SERVER LISTENING
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
