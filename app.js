const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.sent("Home Page");
});

app.get("/about", (request, response) => {
  response.sent(" About Page");
});

module.exports = app;
