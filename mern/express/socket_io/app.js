var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) { // connection event
    console.log('Client connected...');

    client.emit('messages', {hello: 'world'}); //emit the 'message' event on the client
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
server.listen(5500);