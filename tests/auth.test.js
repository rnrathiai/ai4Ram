const supertest = require('supertest');
const request = supertest.agent;

const app = require('../backend/index');



describe ('Auth Routes', ()=>{

    // This is to test missing email and password and user has shared only username
    test('POST /signup should return 400 if fields are missing', async ()=>{
        const response = await request(app)
            .post('/signup')
            .send({username: 'testuser'});
        
            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
    });
});

describe('Sign up routes', ()=>{
    test('missing username returns 400', async()=>{
        const response = await request(app)
            .post('/signup')
            .send({email:"ram31@email.com", password: "Password1"});

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false)
    });
    test('missing email returns 400', async ()=>{
        const response = await request(app)
            .post('/signup')
            .send({username:"Ram31", password: "Passowrd1"});
        
            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
    });
    test('missing password returns 400', async ()=>{
        const response = await request(app)
            .post('/signup')
            .send({username:"Ram31", email:"ram31@email.com"});
        
        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});

describe('Login routes', ()=>{
    test('missing fields returns 400', async ()=>{
        const response = await request(app)
            .post('/login')
            .send({username: 'Ram31'});

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        
    });
    test('wrong password returns 401', async ()=>{
        const response = await request(app)
            .post('/login')
            .send({username: 'Ram21', password:"Wrongpass1"});

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);        
    });
    test('user not found returns 400', async ()=>{
        const response = await request(app)
            .post('/login')
            .send({username: 'Ram51', password:"Password1"});

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);       
    });
});
describe('Dashboard routes', ()=>{
    test('no token returns 401', async ()=>{
        const response = await request(app)
            .get('/dashboard')

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);     
    });
    test('invalid token returns 403', async ()=>{
        const response = await request(app)
            .get('/dashboard')
            .set('Authorization','Bearer wrongtoken');

        expect(response.status).toBe(403);
        expect(response.body.success).toBe(false);     
    });
})
