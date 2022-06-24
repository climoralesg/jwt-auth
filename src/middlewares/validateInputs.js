
const validateInputs=(req,res,next)=>{
    const credentialsValues=Object.values(req.body);
    const empty=credentialsValues.includes('');
    const nullValues=credentialsValues.includes(null);
    
    if(req.body.userName==undefined || req.body.password==undefined){
        res.status(200).json({
            respuesta: "Se necesitan datos",
            statusCode:200,
            internalCode:3,
        });
    }else{
        if(empty==true || nullValues==true){
            res.status(200).json({
                respuesta: "Se necesitan datos",
                statusCode:200,
                internalCode:3
            });
        }else{
            next();
        }
    }
    
}

module.exports={validateInputs}