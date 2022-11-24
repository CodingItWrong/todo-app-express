const express = require('express');
const cors = require('cors');
const todoRepo = require('./todoRepo');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Express!');
});

app.get('/todos', async (_req, res) => {
  const todos = await todoRepo.all();
  res.type('json');
  res.send(todos);
});

module.exports = app;
