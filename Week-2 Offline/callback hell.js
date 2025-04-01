// Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

//has callback hell
// setTimeout(function(){
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hello there");
//         },5000);
//     },3000);
// },1000);

//does not have callback hell
function step3(){
    console.log("hello there");
}
function step2(){
    console.log("hello");
    setTimeout(step3,5000);
}
function step1(){
    console.log("hi");
    setTimeout(step2,3000);
}
setTimeout(step1,1000);