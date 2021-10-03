
const http = require('http');
const path = require('path');
const express = require('express');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const players = {};

app.use(express.static(path.resolve(__dirname, '..', 'docs')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'docs', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a client connected');

  socket.on('register', (msg) => {
    players[msg.name] = {
      name: msg.name, socket
    }
    console.dir(players);
  });

  socket.on('pixel.moveBy', (msg) => {
    Object.values(players).forEach(player => {
      if (player.name == msg.player){
        return
      }
      player.socket.emit('pixel.moveBy', {...msg, player:"Black"})

    })
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});