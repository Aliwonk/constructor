const express = require("express");
const mainRoute = require("./src/routes/main");
const app = express();

app.use(mainRoute);

app.listen(3000, () => {
    console.log("Сервер работает на порту 3000");
});