const request = require('supertest');
const app = require('../backend/app')
const db = require("../backend/database");



let server;
beforeAll(() => {
    server = app.listen(0); // 0 = random available port
});

afterAll(async () => {
    await new Promise((resolve) => server.close(resolve));
    await new Promise((resolve) => db.close(resolve));
});


describe ('Auth Routes', ()=>{

    // This is to test missing email and password and user has shared only username
    test('POST /signup should return 400 if fields are missing', async ()=>{
        const response = await request(app)
            .post('/auth/signup')
            .send({username: 'testuser'});
        
            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
    });
});

describe('Sign up routes', ()=>{
    test('missing username returns 400', async()=>{
        const response = await request(app)
            .post('/auth/signup')
            .send({email:"ram31@email.com", password: "Password1"});

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false)
    });
    test('missing email returns 400', async ()=>{
        const response = await request(app)
            .post('/auth/signup')
            .send({username:"Ram31", password: "Passowrd1"});
        
            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
    });
    test('missing password returns 400', async ()=>{
        const response = await request(app)
            .post('/auth/signup')
            .send({username:"Ram31", email:"ram31@email.com"});
        
        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});

describe('Sign up validation', () => {
    test('username too short returns 400', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ username: 'ab', email: 'test@test.com', password: 'password123' });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test('username too long returns 400', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ username: 'aaaaabbbbbcccccddddde', email: 'test@test.com', password: 'password123' });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test('username with special characters returns 400', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ username: '<script>', email: 'test@test.com', password: 'password123' });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test('invalid email format returns 400', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ username: 'validuser', email: 'notanemail', password: 'password123' });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });

    test('password too short returns 400', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ username: 'validuser', email: 'test@test.com', password: '123' });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
    });
});


describe('Login routes', ()=>{

    beforeAll(async () => {
        await request(app)
            .post('/auth/signup')
            .send({ username: 'logintest', email: 'logintest@test.com', password: 'Password1' });
    });

    test('missing fields returns 400', async ()=>{
        const response = await request(app)
            .post('/auth/login')
            .send({username: 'Ram31'});

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        
    });
    test('wrong password returns 401', async ()=>{
        const response = await request(app)
            .post('/auth/login')
            .send({username: 'logintest', password:"Wrongpass1"});

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);        
    });
    test('user not found returns 400', async ()=>{
        const response = await request(app)
            .post('/auth/login')
            .send({username: 'Ram51', password:"Password1"});

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);       
    });


    afterAll(async () => {
        await new Promise((resolve, reject) => {
            db.run('DELETE FROM users WHERE username = ?',
                ['LOGINTEST'],
                (err) => err ? reject(err) : resolve()
            );
        });
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


describe("Happy path tests", ()=>{
    beforeAll(async ()=>{
        
        await request(app)
            .post('/auth/signup')
            .send({username:"TEST501", email: "test401@email.com", password: "Password1"});

 

    });
    afterAll(async ()=>{
        await new Promise (resolve => setTimeout(resolve, 500))

           // Clean up after tests finish
        await new Promise((resolve, reject) => {
            db.run(
                'DELETE FROM users WHERE username IN (?, ?)',
                ['TEST501', 'TEST502'],
                (err) => err ? reject(err) : resolve()
            );
        });

    });





    test("valid signup returns 201", async ()=>{
        const response = await request(app)
            .post("/auth/signup")
            .send({username:"TEST502", email: "test402@email.com", password: "Password1"})
        
        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);

    });

    test("valid login returns 200 with token", async ()=>{
        const response = await request(app)
            .post('/auth/login')
            .send({username:"TEST501", password: "Password1"});

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.token).toBeDefined();
    });

    test('valid token accesses dashboard', async ()=>{
        const loginResponse = await request(app)
            .post('/auth/login')
            .send({username:"TEST501", password: "Password1"});

        const token = loginResponse.body.token;

        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);

    })
});