const request = require('supertest');
const app = require('../src/app');
const {Todo} = require('../models');

describe('todos', () => {
  afterEach(() => {
    Todo.destroy({truncate: true});
  });

  describe('/todos', () => {
    it('returns all the todos', async () => {
      await Todo.create({name: 'Test Todo 1'});
      await Todo.create({name: 'Test Todo 2'});

      const response = await request(app).get('/todos');
      expect(response.status).toEqual(200);
      expect(response.body).toEqual([
        expect.objectContaining({name: 'Test Todo 1'}),
        expect.objectContaining({name: 'Test Todo 2'}),
      ]);
    });
  });
});
