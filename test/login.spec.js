const app=require('../src/config/serverTest');
const request = require('supertest');
require('dotenv').config();
const db=require('../src/config/database.js');


const nameToken='access-token';
const keyToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjUyMjI1MDQ4fQ.ebq6JVmUmyq5FF0BuQDbKQoa8q-rlKBRfAd78WEJLLI";


describe('GET /application/login',()=>{
    beforeAll(async () => {
        await db.connectDatabase().then(function(){
            console.log("Iniciada la conexion a Base de Datos");
        })
    });

    describe('Codigos estado de peticion',()=>{
        test("Deberia entregar mensaje de usuario correcto con status 200",async()=>{
            const response= await request(app).get("/application/login").set(nameToken,keyToken).send({userName:'Claudio',password:'contrasena'});
            expect(response.statusCode).toBe(200);
        });

        test("Validar si userName es vacio. Debe entregar un 200",async()=>{
            const response=await request(app).get("/application/login").set(nameToken,keyToken).send({userName:'',password:'contrasena'});
            expect(response.statusCode).toBe(200);
        });

        test("Validar si password es vacio. Debe entregar un 200",async()=>{
            const response=await request(app).get("/application/login").set(nameToken,keyToken).send({userName:'Claudio',password:''});
            expect(response.statusCode).toBe(200);
        });
    });
    
    describe('Codigos de estatus interno',()=>{

        test("Usuario y contraseña correctos: Deberia entregar estatus interno 4",async()=>{
            const response= await request(app).get("/application/login").set(nameToken,keyToken).send({userName:'Claudio',password:'contrasena'});
            expect(response.body.internalCode).toEqual(4);
        });

        test("Validar si userName es vacio. Deberia entregar codigo interno 3",async()=>{
            const response= await request(app).get("/application/login").set(nameToken,keyToken).send({userName:'',password:'contrasena'});
            expect(response.body.internalCode).toEqual(3);
        });

        test("Validar si password es vacio. Debe entregar codigo interno 3",async()=>{
            const response=await request(app).get("/application/login").set(nameToken,keyToken).send({userName:'Claudio',password:''});
            expect(response.body.internalCode).toEqual(3);
        })

        afterAll(async () => {
            // Closing the DB connection allows Jest to exit successfully.
            await db.closeClient();
        });
    });   

});
