const Server=require('./src/config/server.js');
const db=require('./src/config/database.js');

require('dotenv').config();

const server=new Server();

db.connectDatabase().then(function(){
    console.log("Iniciada la conexion a Base de Datos");
    server.listen();
})
