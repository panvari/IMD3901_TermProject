const express = require('express');
const app = express();
const http = require('http');
const server = require('http').createServer(app);

const port = 8080;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    console.log('Server pull active.');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
})