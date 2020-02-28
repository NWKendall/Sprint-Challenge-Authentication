require('dotenv').config();
const request = require('supertest');

const server = require('./server.js');

describe('Server', () => {
  describe('operating within correct environment', () => {
    it('testing environment', () => {
      expect(process.env.DB_ENV).toBe("testing")
    })
  })

  describe('get /api ', () => {
    it('returns a status 200 OK', () => {
      request(server)
        .get('/api')
        .then(res => {
          expect(res.status).toBe(200);    
         })
     })
  })
})