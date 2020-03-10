const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);

const LISTEN_PORT = 8080; 

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/scene1', (req,res) => {
    res.sendFile(__dirname + '/public/scenes/mainCourtyard.html');
});

app.get('/scene2', (req,res) => {
    res.sendFile(__dirname + '/public/scenes/greatHall.html');
});



//websocket stuff
socketIO.on('connection', (socket) => {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', (data) => {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    socket.on('change_to_scene2', (data) => {
        console.log('switch to entrance hall');
        socketIO.sockets.emit('scene_2');
    });

    socket.on('change_to_scene1', (data) => {
        console.log('switch to courtyard/entrance to caslte ground scene');
        socketIO.sockets.emit('scene_1');
    });
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT); 
