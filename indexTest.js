const app=require('./src/config/serverTest');
require('dotenv').config();

let port = process.env.PORT;

app.listen(port, () => {
    console.log("Iniciando aplicacion Modo test, puerto: ",port);
});
