// Core Module
const path = require('path');

// External Module
const express = require('express');
const mongoose = require('mongoose');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
mongoose.connect(MONGO_URL).then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
        console.log(`Server running on address http://localhost:${PORT}`);
    });
}).catch(err => console.log(err));