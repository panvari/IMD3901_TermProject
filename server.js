const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);

const LISTEN_PORT = 8080;

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/mobile', function(req, res) {
    res.sendFile(__dirname + '/public/scenes/mobile.html');
});

app.get('/desktop', function(req, res) {
    res.sendFile(__dirname + '/public/scenes/desktop.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/public/scenes/about.html');
});

app.get('/mainCourtyard', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/mainCourtyard.html');
});

app.get('/greatHall', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/greatHall.html');
});

app.get('/throneroom', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/throneRoom.html');
});


app.get('/weaponsRoom', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/weaponsRoom.html');
});

app.get('/guardQuarters', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/guardQuarters.html');
});

app.get('/servantQuarters', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/servantQuarters.html');
});

app.get('/hallway', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/hallway.html');
});

app.get('/kitchen', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/kitchen.html');
});

app.get('/tower', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/tower.html');
});

app.get('/innerCourtyard', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/innerCourtyard.html');
});

app.get('/trainingArea', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/trainingArea.html');
});

app.get('/upperCorridor', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/upperCorridor.html');
});

app.get('/sleepingChambers', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/sleepingChambers.html');
});

app.get('/greatChambers', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/greatChambers.html');
});

app.get('/pantry', (req, res) => {
    res.sendFile(__dirname + '/public/scenes/pantry.html');
});

//MINIGAMES
app.get('/tapestryMini', (req, res) => {
    res.sendFile(__dirname + '/public/minigames/tapestry.html');
});

app.get('/armourMini', (req, res) => {
    res.sendFile(__dirname + '/public/minigames/armoury.html');
});

app.get('/fruitMini', (req, res) => {
    res.sendFile(__dirname + '/public/minigames/fruit.html');
});

app.get('/laundryMini', (req, res) => {
    res.sendFile(__dirname + '/public/minigames/laundry.html');
});

app.get('/towerMini', (req, res) => {
    res.sendFile(__dirname + '/public/minigames/eyeSpy.html');
});

app.get('/targetMini', (req, res) => {
    res.sendFile(__dirname + '/public/minigames/targetPractice.html');
});

//websocket stuff
socketIO.on('connection', (socket) => {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', (data) => {
        console.log(socket.id + ' has disconnected');
    });

    //MOBILE SCENE CHANGE
    socket.on('mobileLoaded', (data) => {
        socketIO.sockets.emit('pageLocationQuery');
    });

    socket.on('mobileLoadTraining', (data) => {
        socketIO.sockets.emit('training_areaMobile');
        socketIO.sockets.emit('message08');
        socketIO.sockets.emit('gem1Change');
        socketIO.sockets.emit('gem2Change');
        socketIO.sockets.emit('gem3Change');
        socketIO.sockets.emit('gem4Change');
        socketIO.sockets.emit('gem5Change');
    });

    socket.on('mobileLoadTower', (data) => {
        socketIO.sockets.emit('towerMobile');
        socketIO.sockets.emit('message07');
        socketIO.sockets.emit('gem1Change');
        socketIO.sockets.emit('gem2Change');
        socketIO.sockets.emit('gem3Change');
        socketIO.sockets.emit('gem4Change');
    });

    socket.on('mobileLoadPantry', (data) => {
        socketIO.sockets.emit('pantryMobile');
        socketIO.sockets.emit('message04');
        socketIO.sockets.emit('gem1Change');
        socketIO.sockets.emit('gem2Change');
    });

    socket.on('mobileLoadWeapons', (data) => {
        socketIO.sockets.emit('weapons_roomMobile');
        socketIO.sockets.emit('message03');
        socketIO.sockets.emit('gem1Change');
    });

    socket.on('mobileLoadThrone', (data) => {
        socketIO.sockets.emit('throne_roomMobile');
        socketIO.sockets.emit('message10');
        socketIO.sockets.emit('gem1Change');
        socketIO.sockets.emit('gem2Change');
        socketIO.sockets.emit('gem3Change');
        socketIO.sockets.emit('gem4Change');
        socketIO.sockets.emit('gem5Change');
        socketIO.sockets.emit('gem6Change');
    });

    socket.on('mobileLoadServant', (data) => {
        socketIO.sockets.emit('servant_quartersMobile');
        socketIO.sockets.emit('message05');
        socketIO.sockets.emit('gem1Change');
        socketIO.sockets.emit('gem2Change');
        socketIO.sockets.emit('gem3Change');
    });

    //ROOM CHANGING EVENTS
    socket.on('great_hall', (data) => {
        socketIO.sockets.emit('great_hall');
        socketIO.sockets.emit('great_hallMobile');
    });

    socket.on('kitchen', (data) => {
        socketIO.sockets.emit('kitchen');
        socketIO.sockets.emit('kitchenMobile');
    });

    socket.on('pantry', (data) => {
        socketIO.sockets.emit('pantry');
        socketIO.sockets.emit('pantryMobile');
    });

    socket.on('upper_corridor', (data) => {
        socketIO.sockets.emit('upper_corridor');
        socketIO.sockets.emit('upper_corridorMobile');
    });
    socket.on('great_chambers', (data) => {
        socketIO.sockets.emit('great_chambers');
        socketIO.sockets.emit('great_chambersMobile');
    });
    socket.on('guard_quarters', (data) => {
        socketIO.sockets.emit('guard_quarters');
        socketIO.sockets.emit('guard_quartersMobile');
    });
    socket.on('hallway', (data) => {
        socketIO.sockets.emit('hallway');
        socketIO.sockets.emit('hallwayMobile');
    });
    socket.on('inner_courtyard', (data) => {
        socketIO.sockets.emit('inner_courtyard');
        socketIO.sockets.emit('inner_courtyardMobile');
    });
    socket.on('main_courtyard', (data) => {
        socketIO.sockets.emit('main_courtyard');
        socketIO.sockets.emit('main_courtyardMobile');
    });
    socket.on('servant_quarters', (data) => {
        socketIO.sockets.emit('servant_quarters');
        socketIO.sockets.emit('servant_quartersMobile');
    });
    socket.on('sleeping_quarters', (data) => {
        socketIO.sockets.emit('sleeping_quarters');
        socketIO.sockets.emit('sleeping_quartersMobile');
    });
    socket.on('throne_room', (data) => {
        socketIO.sockets.emit('throne_room');
        socketIO.sockets.emit('throne_roomMobile');
    });
    socket.on('tower', (data) => {
        socketIO.sockets.emit('tower');
        socketIO.sockets.emit('towerMobile');
    });
    socket.on('training_area', (data) => {
        socketIO.sockets.emit('training_area');
        socketIO.sockets.emit('training_areaMobile');
    });
    socket.on('weapons_room', (data) => {
        socketIO.sockets.emit('weapons_room');
        socketIO.sockets.emit('weapons_roomMobile');
    });

    socket.on('gem1Mobile', (data) => {
        socketIO.sockets.emit('gem1Change');
    });

    socket.on('gem2Mobile', (data) => {
        socketIO.sockets.emit('gem2Change');
    });

    socket.on('gem3Mobile', (data) => {
        socketIO.sockets.emit('gem3Change');
    });

    socket.on('gem4Mobile', (data) => {
        socketIO.sockets.emit('gem4Change');
    });

    socket.on('gem5Mobile', (data) => {
        socketIO.sockets.emit('gem5Change');
    });

    socket.on('gem6Mobile', (data) => {
        socketIO.sockets.emit('gem6Change');
    });

    socket.on('message01Mobile', (data) => {
        socketIO.sockets.emit('message01');
    });

    socket.on('message02Mobile', (data) => {
        socketIO.sockets.emit('message02');
    });

    socket.on('message03Mobile', (data) => {
        socketIO.sockets.emit('message03');
    });

    socket.on('message04Mobile', (data) => {
        socketIO.sockets.emit('message04');
    });

    socket.on('message05Mobile', (data) => {
        socketIO.sockets.emit('message05');
    });

    socket.on('message06Mobile', (data) => {
        socketIO.sockets.emit('message06');
    });

    socket.on('message07Mobile', (data) => {
        socketIO.sockets.emit('message07');
    });

    socket.on('message08Mobile', (data) => {
        socketIO.sockets.emit('message08');
    });

    socket.on('message09Mobile', (data) => {
        socketIO.sockets.emit('message09');
    });

    socket.on('message10Mobile', (data) => {
        socketIO.sockets.emit('message10');
    });

    socket.on('messageOffMobile', (data) => {
        socketIO.sockets.emit('messageOff');
    });

    // MINI GAME CONTROLS FOR Julianna
    socket.on('launch_mini_game1', (data) => {
        console.log('Launching MiniGame 1');
        socketIO.sockets.emit('launch_minigame_1'); //Mobile listen for this call
    });

    socket.on('launch_mini_game2', (data) => {
        console.log('Launching MiniGame 2');
        socketIO.sockets.emit('launch_minigame_2'); //Mobile listen for this call
    });

    socket.on('launch_mini_game3', (data) => {
        console.log('Launching MiniGame 3');
        socketIO.sockets.emit('launch_minigame_3'); //Mobile listen for this call
    });

    socket.on('launch_mini_game4', (data) => {
        console.log('Launching MiniGame 4');
        socketIO.sockets.emit('launch_minigame_4'); //Mobile listen for this call
    });

    socket.on('launch_mini_game5', (data) => {
        console.log('Launching MiniGame 5');
        socketIO.sockets.emit('launch_minigame_5'); //Mobile listen for this call
    });

    socket.on('launch_mini_game6', (data) => {
        console.log('Launching MiniGame 6');
        socketIO.sockets.emit('launch_minigame_6'); //Mobile listen for this call
    });

});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT)