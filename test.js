const mongoose = require("mongoose");

const BlogPost = require("./models/BlogPost");

// connect to mongoDB
// if the db does not exist it will be create automatically
mongoose.connect("mongodb://localhost/my_database");

// create a document into the BlogPost collection
BlogPost.create(
  {
    title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:",
  },
  (error, blogPost) => {
    console.log(error, blogPost);
  }
);

// query filter
BlogPost.find(
  {
    title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);

// using unique id
var id = "5cb436980b33147489eadfbb";
BlogPost.findById(id, (error, blogPost) =>{
console.log(error,blogPost)
})

// updating records/documents
var id = "61ffb7bda1663aeae6fd0954";
BlogPost.findByIdAndUpdate(id,{
    title:'updated title'
},(error,blogPost)=>{
    console.log(error,blogPost);
})

// deleting single record
var id = "61ffb7bda1663aeae6fd0954"

BlogPost.findByIdAndDelete(id,(error,blogPost)=>{
    console.log(error,blogPost);
})