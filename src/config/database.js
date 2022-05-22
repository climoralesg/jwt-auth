const {MongoClient}=require('mongodb');
const url="mongodb+srv://"+process.env.USER_NAME_DB+":"+process.env.PASSWORD_DB+"@cluster0.abzm7.mongodb.net/?retryWrites=true&w=majority"
const password=process.env.PASSWORD_DB;
const user=process.env.USER_NAME_DB;
const databaseName=process.env.DB_NAME;
const client=new MongoClient(url);


const connect=()=>{
    client.connect();
    const db=client.db(databaseName);
    return db;
}


module.exports={
    connect
}