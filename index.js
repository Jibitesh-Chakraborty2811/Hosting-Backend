const express = require('express')
const app = express()

const port = 9000;

app.get('/',(req,res)=>{
    res.json({message:'Hello World'});
})

app.get('/show',(req,res)=>{
    res.json({message:'This is show path'})
})

app.listen(9000,()=>{
    console.log('Port Started on port 9000');
})