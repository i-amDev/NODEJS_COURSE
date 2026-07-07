// External Modules
const express = require("express");

// Local Modules
const userRouter = require("./routes/userRouter");
const {hostRouter}  = require("./routes/hostRouter");
const errorController = require("./controllers/errorController");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use(errorController.pageNotFound);

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});