const db = require('./models');

// fix "A worker process has failed to exit gracefully" warning
afterAll(() => {
  db.sequelize.close();
});
