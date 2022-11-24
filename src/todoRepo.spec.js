const todoRepo = require('./todoRepo');
const {Todo} = require('../models');

describe('todoRepo', () => {
  afterEach(() => {
    Todo.destroy({truncate: true});
  });

  describe('all', () => {
    it('returns all the todos', async () => {
      await Todo.create({name: 'Test Todo 1'});
      await Todo.create({name: 'Test Todo 2'});

      const todos = await todoRepo.all();
      expect(todos).toEqual([
        expect.objectContaining({name: 'Test Todo 1'}),
        expect.objectContaining({name: 'Test Todo 2'}),
      ]);
    });
  });
});
