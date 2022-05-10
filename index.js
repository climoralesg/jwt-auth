const Server=require('./src/config/server.js');
require('dotenv').config();

const server=new Server();
server.listen();
