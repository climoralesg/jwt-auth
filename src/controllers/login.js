const jwt=require('jsonwebtoken');

const dbName='login';

const {connect}=require('../config/database.js');
const {response} = require("express");
const {request} = require("express");

const bcrypt=require('bcrypt');
const saltRounds=10;

const myPlaintextPassword = 'contrasena1234';
const someOtherPlaintextPassword = 'not_bacon';

/*
const login=(req=request,res=response)=>{
    
    bcrypt.genSalt(saltRounds,function(err,salt){
        bcrypt.hash(myPlaintextPassword,salt,function(err,hash){
            console.log("hash",hash);

            bcrypt.compare(myPlaintextPassword,hash,function(err,result){
                console.log("result",result);    
            })

        })
    })

    const conectar=async()=>{
        await client.connect();
        console.log("conectado con exito");
        const db=client.db(dbName);
        const collection=db.collection('users');
        return 'done';
    }

    conectar().then(console.log).catch(console.error).finally(() => client.close());
    res.json({respuesta: "Login de Prueba"});
}
*/
const login=(req=request,res=response)=>{
    const db = connect();

    /*
    const collection=db.collection('users');
    return 'done';
    */
    res.json({respuesta: "Login de Prueba"});
}


module.exports={login}

