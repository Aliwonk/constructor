const express = require("express");
const app = express();
const jsonParser = express.json();
const mainRoute = require("./src/routes/main");
const authRoute = require("./src/routes/auth");

app.use("/", jsonParser, mainRoute);
app.use("/auth", jsonParser, authRoute);

app.listen(3000, () => {
    console.log("Сервер работает на порту 3000");
    console.log("http://localhost:3000/");
});