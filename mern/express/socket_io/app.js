var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) { // connection event
    console.log('Client connected...');
    client.on('messages', function(data) {
        console.log(data);
    });
    // client.emit('messages', { hello: 'world'});
    });
        // client.on("messages", function(data) {
        //     console.log(data);
        //     client.emit("thread", data);
        //     client.broadcast.emit("thread", data);
        //   });
        app.get('/', function(req, res) {
        res.sendFile(__dirname + "/index.html");
  });

//   app.use(express.static("/"));
        server.listen(8080);