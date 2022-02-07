const express = require("express");
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express(); //calls express function start new express app

// middlewares
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')


// mongoDB
// mongoDB connector
mongoose.connect('mongodb://localhost/my_databse',{
  useNewUrlParser:true
})

// routing
// get
app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/index.html"));
res.render('index')
});
app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/about.html"));
res.render('about')
});
app.get("/contact", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/contact.html"));
res.render('contact')
});
app.get("/post", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "pages/post.html"));
res.render('post')
});
app.get('/posts/new',(req,res)=>{
  res.render('create')
})

// post
app.post('/posts/store',(req,res)=>{
  console.log(req.body);
  res.redirect('/')
})

app.listen(3000, () => {
  console.log("app listening at port 3000");
});