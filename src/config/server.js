const express = require('express');
require('dotenv').config();

class Server{
    constructor(){
        this.port=process.env.PORT;
        this.express=express();

        this.middlewares();
        this.routes();
    }

    middlewares=()=>{
        this.express.use(express.json());
        this.express.use(express.static('public'));
    }

    routes=()=>{
        this.express.use('/aplication/index',require('../routes/check.js'));
    }

    listen=()=>{
        this.express.listen(this.port,()=>{
            console.log("Iniciando aplicacion, puerto: ", this.port);
        })
    }
}

module.exports=Server;