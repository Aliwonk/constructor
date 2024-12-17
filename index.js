const express = require("express");
const app = express();
const cors = require("cors");
const mainRoute = require("./src/routes/main");

app.use(cors({
    origin: "*"
}));
app.use(mainRoute);

app.listen(3000, () => {
    console.log("Сервер работает на порту 3000");
});