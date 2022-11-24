const request = require('supertest');
const app = require('../src/app');

describe('smoke test', () => {
  it('returns a hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello Express!');
  });
});
