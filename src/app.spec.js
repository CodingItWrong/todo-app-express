const request = require('supertest');
const app = require('./app');
const todoRepo = require('./todoRepo');

jest.mock('./todoRepo');

// not necessarily valuable to test the route layer, but just demonstrating how it can be done if you want to

describe('app', () => {
  describe('/todos', () => {
    it('returns all the todos', async () => {
      todoRepo.all.mockResolvedValue([
        {id: 1, name: 'Test Todo 1'},
        {id: 2, name: 'Test Todo 2'},
      ]);

      const response = await request(app).get('/todos');
      expect(response.status).toEqual(200);
      expect(response.body).toEqual([
        expect.objectContaining({name: 'Test Todo 1'}),
        expect.objectContaining({name: 'Test Todo 2'}),
      ]);
    });
  });
});
