
const validateInputs=(req,res,next)=>{
    const credentialsValues=Object.values(req.body);
    const empty=credentialsValues.includes('');
    const nullValues=credentialsValues.includes(null);
    
    if(req.body.userName==undefined || req.body.password==undefined){
        res.json({respuesta: "Se necesitan datos",status:404});
    }else{
        if(empty==true || nullValues==true){
            res.json({respuesta: "Se necesitan datos",status:404});
        }else{
            next();
        }
    }
    
}

module.exports={validateInputs}