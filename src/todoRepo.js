const {Todo} = require('../models');

const todoRepo = {
  all: async () => {
    const todos = await Todo.findAll();
    return todos;
  },
};

module.exports = todoRepo;
