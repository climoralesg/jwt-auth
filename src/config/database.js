require('dotenv').config();

const MongoClient=require('mongodb').MongoClient;

const url="mongodb+srv://"+process.env.USER_NAME_DB+":"+process.env.PASSWORD_DB+"@cluster0.abzm7.mongodb.net/?retryWrites=true&w=majority"
const password=process.env.PASSWORD_DB;
const user=process.env.USER_NAME_DB;
const databaseName=process.env.DB_NAME;

const connectionOptions = { poolSize: process.env.MONGO_DB_POOLSIZE || 1 };

let database;


const connect= async ()=>{
    const client= await MongoClient.connect(url);
    database = client.db('login');
}

const getDB=()=>{
    if(!database){
        throw{message:"Conexion no establecida"};
    }
    return database;
}

const closeClient=async()=>{
    client.close();
}

module.exports={
    connectDatabase:connect,
    closeClient:closeClient,
    getDB:getDB
}