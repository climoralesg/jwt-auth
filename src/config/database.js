const {MongoClient}=require('mongodb');
require('dotenv').config();
const url="mongodb+srv://"+process.env.USER_NAME_DB+":"+process.env.PASSWORD_DB+"@cluster0.abzm7.mongodb.net/?retryWrites=true&w=majority"
const password=process.env.PASSWORD_DB;
const user=process.env.USER_NAME_DB;
const databaseName=process.env.DB_NAME;
const connectionOptions = { poolSize: process.env.MONGO_DB_POOLSIZE || 1 };
const client=new MongoClient(url,this.connectionOptions);


const connect=()=>{
    client.connect();
    return client;
}
const closeClient=async()=>{
    client.close();
}


module.exports={
    connect,closeClient
}