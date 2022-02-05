const express = require('express');
const path = require('path');

const app = express() //calls express function start new express app

// routing
app.get('/',(req,res)=>{
    res.json({
        name:'Sensei'
    })
})

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})


app.listen(3000,()=>{
    console.log('app listening at port 3000');
})
