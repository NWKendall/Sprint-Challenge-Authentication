require('dotenv').config();
const request = require('supertest');

const router = require('./auth-router');


// register
describe('get /regiester ', () => {
  it('returns a status 200 OK', () => {
    request(router)
      .get('/register')
      .then(res => {
        expect(res.status).toBe(200);    
        })
    })
})



// login
describe('get /login ', () => {
  it('returns a status 200 OK', () => {
    request(router)
      .get('/login')
      .then(res => {
        expect(res.status).toBe(200);    
        })
    })
})