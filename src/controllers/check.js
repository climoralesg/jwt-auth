const {response} = require("express");
const {request} = require("express");


const hola=(req = request, response)=>{
    console.log("hola");
    response.json({respuesta: "No funciono"});
}




module.exports = {hola};
