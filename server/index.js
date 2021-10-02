
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, '..', 'docs')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'docs', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('pixel.moveBy', (msg) => {
    console.dir(msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});