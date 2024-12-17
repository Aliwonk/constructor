const express = require("express");
const path = require("path");
const authRoute = express.Router();

// МАРШРУТ РЕГИСТРАЦИИИ

authRoute.use(express.static(path.normalize(__dirname, "/../views/login")));
authRoute.get("/login", (req, res) => {
    res.send("Логин");
});

authRoute.post("/login", (req, res) => {
    const { body } = req;

    console.log(body);
    res.status(200).send({
        statusCode: 200,
        message: "Данные приняты"
    });
});

// МАРШРУТ ЛОГИНА

authRoute.use(express.static(path.normalize(__dirname, "/../views/register")));
authRoute.get("/registration", (req, res) => {
    res.send("Регистрация")
});

authRoute.post("/registration", (req, res) => {
    const { body } = req;

    console.log(body);
    res.status(200).send({
        statusCode: 200,
        message: "Данные приняты"
    });
});

module.exports = authRoute;