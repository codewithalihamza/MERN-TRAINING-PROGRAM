// let arr=[12,45,78,64];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]*2);
// }

// let abb=arr.map(arr=> arr*2);
// console.log("New : "+abb);
// console.log("Old : "+arr);


// let fltr=arr.filter(arr=> arr==78);
// console.log(fltr);




//---------------------------------------------------------
// let findMin=(x)=>{
//     // console.log(x);
//     let b=x[0];

//     for(let i=1; i<x.length; i++){
//         if(b>x[i]){
//             b=x[i];
//         }
//     }
//     console.log(b);
// }

// let arr=[12,4,567,342,45];
// findMin(arr);


//------------------------------------------------------------

// let a="257";               //2*5*7=70

// let digits = a.split(""); 
// let product = digits.reduce((acc, digit) => acc * parseInt(digit), 1);
// console.log(product);


// let arr="987";
// let b=1;
// for(let i=0; i<arr.length; i++){
//     b*=parseInt(arr[i]);
// }
// console.log(b);




// usman   ====>  namsu

let strng="Usman Zafar";
let rvrs="";

for(let i=strng.length-1; i>=0; i--){
    rvrs+=strng[i];
}
console.log(rvrs);
