//has callback hell
// function setTimeoutpromisified(duration){
//     return new Promise(resolve=>{
//         setTimeout(resolve,duration);
//     })
// }
// setTimeoutpromisified(1000).then(()=>{
//     console.log("hi");
//     setTimeoutpromisified(3000).then(()=>{
//         console.log("hello");
//         setTimeoutpromisified(5000).then(()=>console.log("hello there"));
//     });
// });


//does not have callback hell
//promise chaining
function setTimeoutpromisified(duration){
    return new Promise(resolve=>{
        setTimeout(resolve,duration);
    })
}
setTimeoutpromisified(1000).then(()=>{
    console.log("hi");
    return setTimeoutpromisified(3000);
}).then(()=>{
    console.log("hello");
    return setTimeoutpromisified(5000);
}).then(()=>{
    console.log("hello there");
})