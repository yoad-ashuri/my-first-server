const express = require('express');

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", function(req, res) {
  res.send("My name is Yoad Ashuri and I love sports and code");
});

app.listen(3000, function(){
  console.log("Server started at port 3000");
});
