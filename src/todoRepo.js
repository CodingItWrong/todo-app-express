const {Todo} = require('../models');

const todoRepo = {
  all: () => Todo.findAll(),
};

module.exports = todoRepo;
