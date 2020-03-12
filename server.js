const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);

const LISTEN_PORT = 8080;

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/mobile', function(req, res) {
    res.sendFile(__dirname + '/public/scenes/mobile.html');
});

app.get('/desktop', function(req, res) {
    res.sendFile(__dirname + '/public/scenes/desktop.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/public/scenes/about.html');
});

app.get('/courtyard', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/mainCourtyard.html');
});

app.get('/greatHall', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/greatHall.html');
});

app.get('/throneroom', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/throneRoom.html');
});

//websocket stuff
socketIO.on('connection', (socket) => {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', (data) => {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    socket.on('courtyard_to_greathall', (data) => {
        console.log('switch to entrance hall');
        socketIO.sockets.emit('scene_2');
    });

    socket.on('greathall_to_throneroom', (data) => {
        console.log('switch from great hall to throne room scene');
        socketIO.sockets.emit('scene_3');
    });

    socket.on('throneroom_to_greathall', (data) => {
        console.log('switch to great hall from throne room scene');
        socketIO.sockets.emit('scene_3_1');
    });

    socket.on('greathall_to_courtyard', (data) => {
        console.log('switch from geat hall to courtyard scene');
        socketIO.sockets.emit('scene_1');
    });

});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT)