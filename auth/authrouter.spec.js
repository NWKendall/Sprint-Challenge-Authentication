const authModel = require('./auth-model.js');
const db = require('../database/dbConfig.js');

const request = require('supertest');
const server = require('../api/server.js');
// register
describe('POST /register ', function() {

  beforeEach
  (async () => {
    await db('users').truncate();
  })
  
  it('registers new user', async function() {
    await authModel
      .registerUser({ username: "TEST", password: "TEST"})

    const testDB = await db('users')

    expect(testDB).toHaveLength(1)
    })

    it('returns a status of 404 when the posting no credentials to the db', async () => {
      const testUser = {};
          const response = await request(server)
            .post('/register')
            .send(testUser);
          
          expect(response.status).toBe(404);
    })

})


describe('POST /login ', function() {

  it('runs the test', function() {
    expect(true).toBe(true);
  })


  
  it('returns a status of 404 when the credentials don\'t exist in the db', async () => {
    const testUser = {};
        const response = await request(server)
          .post('/login')
          .send(testUser);
        
        expect(response.status).toBe(404);
  })

  it('returns status code 200', async () => {
    
    const testReg = { username: "TEST", password: "TEST"}
    
    // const response = await request(server)
    //     .post('/login')
    //     .send(testReg)
    //     .getUserById(response.id)
  
  })
})