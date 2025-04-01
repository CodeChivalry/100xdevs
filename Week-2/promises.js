function waitfor3S(resolve){
    setTimeout(resolve,3000);
}
function setPromisified(){
    return new Promise(waitfor3S);
}
function main(){
    console.log("Hello");
}
setPromisified().then(main); //promisified approach
//when eventual completion happens call main
//eventual completion happens when resolve gets called
