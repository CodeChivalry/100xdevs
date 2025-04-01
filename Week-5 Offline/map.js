//given an array, multiply each el of arr with 2
const arr1=[1,2,3,4,5];
const newarr=[];
for(let i=0;i<arr1.length;i++){
    newarr.push(arr1[i]*2);
}
console.log(newarr);
const ans=arr1.map((i)=>i*2);
console.log(ans);