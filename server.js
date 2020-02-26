const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server); //hello I am new

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/scene1', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/scene2', function(req,res) {
    res.sendFile(__dirname + '/public/newScene.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    socket.on('change_to_scene2', function(data) {
        console.log('switch scene called');
        socketIO.sockets.emit('scene_2');
    });

    socket.on('change_to_scene1', function(data) {
        console.log('switch scene called');
        socketIO.sockets.emit('scene_1');
    });
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT); 