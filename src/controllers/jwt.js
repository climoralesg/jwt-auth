const jwt = require('jsonwebtoken');
const {response} = require("express");
const {request} = require("express");



const create=(req = request,res = response)=>{
    const payload = {
        check:  true
    };
    const token=jwt.sign(payload,process.env.KEY);
    res.json({respuesta: "Token creado",nombreUsuario:req.body.userName,password:req.body.password,token:token});
}

const verify=(req=request,res=response)=>{
    const token=req.headers['access-token'];
    jwt.verify(token,process.env.KEY,(err,decode)=>{
        if(err){
            res.json({respuesta: "Token incorrecto",userName:req.body.userName,password:req.body.password,token:token,llave:process.env.KEY}) ;
        }else{
            res.json({respuesta: "Si token correcto",userName:req.body.userName,password:req.body.password,token:token,llave:process.env.KEY,decode:decode}) ;
        }
    });

    
}




module.exports = {create,verify};
