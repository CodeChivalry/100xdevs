// const fs=require("fs")
// console.log("start of file");
// function readfile(resolve){
//     console.log("readfile called");
//     setTimeout(function(){
//         console.log("timeout completed");
//         resolve();
//     },5000);
// }
// function readfilePromisified(){
//     console.log("promisified readfile called");
//     return new Promise(readfile);
// }
// function callback(){
//     console.log("timer is done");
// }
// readfilePromisified().then(callback);
// console.log("end of file");
const fs=require("fs");
function readfile(resolve,reject){
    fs.readFile("100xdevs/Week-2/a.txt","utf-8",function(err,data){
        if(err) reject("file not found");
        else resolve(data);
    })
}
function readfilePromisified(){
    return new Promise(readfile);
}
readfilePromisified().then(function(x){
    console.log(x);
}).catch(function(e){
    console.log(e);
})
