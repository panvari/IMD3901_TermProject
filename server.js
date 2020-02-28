const express = require('express');
const app = express();
const http = require('http');
const server = require('http').createServer(app);
//let x = window.matchMedia("(max-width: 640px)");

const port = 8080;
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/mobile', (req, res) => {
    res.sendFile(__dirname + '/public/mobile.html');
});

app.get('/desktop', (req, res) => {
    res.sendFile(__dirname + '/public/desktop.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
})