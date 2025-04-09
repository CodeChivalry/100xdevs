//internal package
const path=require('path');
console.log(__dirname);
console.log(path.join(__dirname,"index.js"));
console.log(path.join(__dirname,"index.js","../../Projects"));
const fs=require('fs');
const filePath=path.join(__dirname,"a.txt");
fs.readFile(filePath,"utf-8",function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});