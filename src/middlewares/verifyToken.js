const jwt = require("jsonwebtoken");


const verifyToken=(req,res,next)=>{
    const userToken=req.headers['access-token'];
    if(userToken==null || userToken == undefined || userToken==""){
        res.json({message: "Se necesita token de ingreso",status:400});
    }else{
        jwt.verify(userToken,process.env.KEY,async(err,decode)=>{
            if(err){
                res.json({message: "Sin respuesta",status:400}) ;
            }else{
                next();
            }
        })
    }
}

module.exports={
    verifyToken
}