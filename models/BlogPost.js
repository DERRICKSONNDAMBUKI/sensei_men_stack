// defining a model
const mongoose = require('mongoose');
const schema = mongoose.Schema

const BlogPostShema = new mongoose.Schema({
    title:String,
    body:String
})

const BlogPost = mongoose.model('BlogPost',BlogPostShema)
module.exports = BlogPost