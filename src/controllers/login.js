const jwt=require('jsonwebtoken');

const dbName='login';

const db=require('../config/database.js');

const {response} = require("express");
const {request} = require("express");

const bcrypt=require('bcrypt');



const changePasswordBcrypt=async(req=request,res=response)=>{

    const password=req.body.password;
    const saltRounds=parseInt(process.env.SALTROUNDS);

    bcrypt.genSalt(saltRounds,function(err,salt){
        bcrypt.hash(password,salt,function(err,hash){
            console.log(hash);
            res.json({respuesta: "Contraseña "+password+" en hash: "+hash +"",status:400});
        })
    })

}


const login = async (req=request,res=response)=>{
    const password=req.body.password;
    const userName=req.body.userName;
    const userToken=req.headers['access-token'];

    const database=db.getDB();
    const users=database.collection('users');
    const query = await users.findOne({ userName: req.body.userName },"");
    bcrypt.compare(password,query.password,function(err,result){
        if(result===true){
            res.json({respuesta: "Usuario correcto",status:200});
        }else{
            res.json({respuesta: "Usuario correcto y/o contraseña incorrectos",status:400});
        }
    });
}


const testlogin=(req=request,res=response)=>{
    res.status(200).json({respuesta: "Hola Usuario",statusCode:200});
}


module.exports={login,changePasswordBcrypt,testlogin}

