const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;

app.use(morgan("tiny"));
app.get("/", (request, response) => {
  response.send();
});
