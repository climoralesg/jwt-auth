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

    connectDatabase=async()=> {
        await connect();
    }

    middlewares=()=>{
        this.express.set('key',process.env.KEY);
        this.express.use(express.json());
        this.express.use(express.static('public'));
    }

    routes=()=>{
        this.express.use('/application',require('../routes/jwt.js'));
        this.express.use('/application',require('../routes/login.js'));
    }

    listen=()=>{
        this.express.listen(this.port,()=>{
            console.log("Iniciando aplicacion, puerto: ", this.port);
        })
    }
}

module.exports=Server;