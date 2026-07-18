// Core Module
const path = require('path');

// External Module
const express = require('express');
const cors = require('cors');
const DB_PATH = "mongodb://127.0.0.1:27017/todo";
const todoItemRouter = require("./routes/todoItemsRouter")

//Local Module
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require('mongoose');

const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));
app.use(cors());
app.use(express.json());
app.use("/api/todo", todoItemRouter);
app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});
