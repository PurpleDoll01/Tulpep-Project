const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const fs = require('fs');
const content = fs.readFileSync('data.txt', 'utf8');

var data = JSON.parse(content);

app.use(express.static('src'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html' ));

io.on('connection', (socket) => {
    setTimeout(function(){ io.emit('data', data); }, 0);
    console.log(data.characters)
})

http.listen(3000, () => console.log('Listening on port 3000'))