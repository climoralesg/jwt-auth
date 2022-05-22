const {MongoClient}=require('mongodb');


class Database{
    constructor(){
        this.url="mongodb+srv://"+process.env.USER_NAME_DB+":"+process.env.PASSWORD_DB+"@cluster0.abzm7.mongodb.net/?retryWrites=true&w=majority"
        this.password=process.env.PASSWORD_DB;
        this.user=process.env.USER_NAME_DB;
        this.databaseName=process.env.DB_NAME;
        this.client=new MongoClient(this.url);
    }

    connect=async()=>{
        await this.client.connect();
        //const db=this.client.db(this.databaseName);
    }

    getClient=async()=>{
        return this.client;
    }

}



module.exports=Database;