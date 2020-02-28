require('dotenv').config();
const request = require('supertest');

const router = require('./jokes-router');

describe('Jokers Tests', () => {
  
  describe('get /jokes', () => {
    
    it('returns a status 200 OK', () => {
      request(router)
        .get('/jokes')
        .then(res => {
          expect(res.status).toBe(200);    
         })
     })

     it('checks response type is JSON', () => {
      request(router)
        .get('/jokes')
        .then(res => {
          expect(res.type).toMatch(/json/);    
         })
     })


  })
})