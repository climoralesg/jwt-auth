const app=require('../src/config/serverTest');
const request = require('supertest');

describe('GET /application/testlogin',()=>{
    test("Deberia responder con un 200",async()=>{
        const response = await request(app).get("/application/testlogin").send();
        expect(response.statusCode).toBe(200); //Si devuelve un status 200
    });

    test("Deberia responder con un objeto",async()=>{
        const response = await request(app).get("/application/testlogin").send();
        expect(response.body).toBeInstanceOf(Object); //Si devuelve un objeto, se puede cambiar por un Array
    });
});
