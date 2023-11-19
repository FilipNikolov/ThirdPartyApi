const config = require("./pkg/config");
const express = require("express");
const weather = require("./handlers/weather");

const api = express();

api.get("/api/v1/weather/:city", weather.getForCity);

api.listen(config.get('service').port, err => {
    if (err) return console.log(Err);
    return console.log("Server started of port", config.get('service').port, "!")
})