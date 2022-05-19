const jwt=require('jsonwebtoken');

const {response} = require("express");
const {request} = require("express");


const login=(req=request,res=response)=>{
    res.json({respuesta: "Login de Prueba"});
}




module.exports={login}

