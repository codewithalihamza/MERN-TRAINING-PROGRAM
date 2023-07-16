// Find number in array whose value is greater and equal than 10
// This method we use normaly in our code using for loop

// let arr=[12,13,4,2,4,1];
// for(i=0;i<arr.length;i++){
//     if(arr[i]>=10){
//         console.log(arr[i]);
//     }
// }

// output=>[12 13]


// Now make a code using Filter to reduce our time
// Find number in array whose value is greater and equal than 10

let arr=[12,13,4,2,4,1];
let new_filter=arr.filter(arr=>arr>=10);
console.log(new_filter);
// output=>[12 13]




// making code using two method map and filter let's check how it's work
// Find number from copy of array(using map) whose value is greater and equal than 20

// let arr=[12,13,4,2,4,1];
// let new_arr=arr.map(arr=>arr+10);
// let new_filter=new_arr.filter(new_arr=>new_arr>=20);
// console.log("1). Original Array = "+arr)
// console.log("2). Copy Array using Map = "+new_arr);
// console.log("3). Copy of Array which Filter using filter method = "+ new_filter);



//Output
// 1). Original Array = 12,13,4,2,4,1
// 2). Copy Array using Map = 22,23,14,12,14,11
// 3). Copy of Array which Filter using filter method = 22,23