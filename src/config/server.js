const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');


class Server{
    constructor(){
        this.port=process.env.PORT;
        this.express=express();

        this.middlewares();
        this.routes();
    }

    middlewares=()=>{
        this.express.set('key',process.env.KEY);
        this.express.use(express.json());
        this.express.use(express.static('public'));
    }

    routes=()=>{
        this.express.use('/aplication',require('../routes/jwt.js'));
        this.express.use('/aplication',require('../routes/login.js'));
    }

    listen=()=>{
        this.express.listen(this.port,()=>{
            console.log("Iniciando aplicacion, puerto: ", this.port);
        })
    }
}

module.exports=Server;