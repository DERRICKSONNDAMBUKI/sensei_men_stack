const express = require('express');

const app = express() //calls express function start new express app

app.get('/',(req,res)=>{
    res.json({
        name:'Sensei'
    })
})



app.listen(3000,()=>{
    console.log('app listening at port 3000');
})
