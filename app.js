const express = require("express");
const path = require("path");
const ejs = require('ejs');

const app = express(); //calls express function start new express app

// middlewares
app.use(express.static("public"));
app.set('view engine','ejs')

// routing
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});
app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
