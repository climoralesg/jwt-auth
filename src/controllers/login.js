const jwt=require('jsonwebtoken');

const dbName='login';

const {connect}=require('../config/database.js');
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
    console.log("userName  ",req.body.userName);

    jwt.verify(userToken,process.env.KEY,async (err,decode)=>{
        if(err){
            res.json({message: "Sin respuesta",status:400}) ;
        }else{
            const client = connect();
            const db=client.db('login')
            const users=db.collection('users');
            const query = await users.findOne({ userName: req.body.userName },"");
            bcrypt.compare(password,query.password,function(err,result){
                if(result===true){
                    res.json({respuesta: "Usuario correcto",status:200});
                }else{
                    res.json({respuesta: "Usuario correcto y/o contraseña incorrectos",status:400});
                }
            });
        }
    });

}


module.exports={login,changePasswordBcrypt}

