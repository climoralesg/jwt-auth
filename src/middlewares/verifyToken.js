const jwt = require("jsonwebtoken");


const verifyToken=(req,res,next)=>{
    const userToken=req.headers['access-token'];
    if(userToken==null || userToken == undefined || userToken==""){
        res.status(200).json({
            message: "Se necesita token de ingreso",
            status:200,
            internalCode:1});
    }else{
        jwt.verify(userToken,process.env.KEY,async(err,decode)=>{
            if(err){
                res.status(400).json({
                    message: "Sin respuesta",
                    statusCode:400,
                    internalCode:2}) ;
            }else{
                next();
            }
        })
    }
}

module.exports={
    verifyToken
}