require('dotenv').confing();
const http = require('http');
const app = require('./app');

const PORT = proccess.env.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.lot('Server running.');
});