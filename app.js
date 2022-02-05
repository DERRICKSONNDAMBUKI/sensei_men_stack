const express = require("express");
const path = require("path");

const app = express(); //calls express function start new express app
app.use(express.static('public'))

// routing

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
