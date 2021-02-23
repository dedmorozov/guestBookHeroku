const express = require('express');
const cors = require('cors');
require('dotenv').config();

const initCommentRoutes = require('./modules/comments/comment.routes');
const initDatabase = require('./modules/database/database.entity');

const PORT = process.env.PORT || 4000;

var distDir = __dirname + "/build/";

const startServer = async () => {
  const app = express();

  app.use(cors('*'));
  app.use(express.static(distDir));
  // app.use(express.json());

  await initDatabase();
  initCommentRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server available on: http://localhost:${PORT}`);
  });
};

startServer().then();
