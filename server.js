const http = require('http');           //importa http
const port = process.env.PORT || 3000;  //pega a porta disp ou a 3000
const app = require('./app');
const server = http.createServer(app);     //cria server

server.listen(port); // server escutando na port

