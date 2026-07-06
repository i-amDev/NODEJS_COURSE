// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});