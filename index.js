const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello bashu..!");
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Toady's date is ${date.getDate()}`);
});

app.get("/page", (request, response) => {
  response.sendFile("/page.html", { root: __dirname });
});

app.listen(3000);
