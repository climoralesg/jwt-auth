const jwt = require('jsonwebtoken');
const {response} = require("express");
const {request} = require("express");


const create=(req = request,res = response)=>{
    
    const payload = {
        check:  true
    };
    const token=jwt.sign(payload,process.env.KEY);
    res.json({respuesta: "Token Creado",token:token});

}

const verify=(req=request,res=response)=>{
    const token=req.headers['access-token'];
    jwt.verify(token,process.env.KEY,(err,decode)=>{
        if(err){
            res.json({message: "Token Incorrecto",status:400,token:token}) ;
        }else{
            res.json({message: "Token Correcto",status:200,token:token,decode:decode}) ;
        }
    });
}

module.exports = {create,verify};
