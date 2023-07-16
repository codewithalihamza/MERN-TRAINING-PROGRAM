

// Add number 5 in each indexes of array

// one of this method we use normaly using for loop

// let arr=[12,28,98,1,33];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]+5);    
// }


// Now it's very easy for adding number 5 in each indexes of array using map 

// let arr=[12,28,98,1,33];
// let new_arr=arr.map(arr=>arr+5);     //creates a new array from calling a function for every array element.
// console.log(new_arr);    //does not change the original array.


const names = ["Alice", "Bob", "Charlie"];
const personObjects = names.map(name => ({name: name, age: 30}));

console.log(personObjects); // [{name: "Alice", age: 30}, {name: "Bob", age: 30}, {name: "Charlie", age: 30}]

//In this example, we use an arrow function to create a new object for each name in the names array with the name property set to the name and the age property set to 30. We wrap the object literal in parentheses to avoid a syntax error caused by the curly braces being interpreted as the start of a function body instead of an object literal. The resulting personObjects array contains three objects with the same age value but different name values.

