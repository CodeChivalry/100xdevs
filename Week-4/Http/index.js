const express=require('express');
const app=express();
//route handlers
app.get('/',function(req,res){
    res.send("hello world");
})
app.listen(3000) //port