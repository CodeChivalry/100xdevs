function setTimeoutpromisified(duration){
    return new Promise(resolve=>setTimeout(resolve,duration));
}
async function solve(){
    await setTimeoutpromisified(1000);
    console.log("hi");
    await setTimeoutpromisified(3000);
    console.log("hello");
    await setTimeoutpromisified(5000);
    console.log("hello there");
}
solve();
console.log("outside"); //gets logged first