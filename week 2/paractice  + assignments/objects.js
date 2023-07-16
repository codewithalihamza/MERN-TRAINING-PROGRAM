// What are Objects in JavaScripts

// varriable contain single value

//var Person={FirstName: "Ali", Lastname:"Hamza", Age:20, country:"Pakistan"};
//console.log(Person)   //calling All Values
//console.log(Person.FirstName); //Calling by name

// multiple data store in a single varriable

var products =[
            {
                pid: 0,
                pname: "Men T Shirts",
                size: ["L","M","S"],
                color: ["red","green","yellow"],
                Price:  900
            },
            {
                pid: 1,
                pname: "Women Shirts",
                size: ["L","M","S"],
                color: ["red","green","yellow"],
                Price:  1000
            },
            {
                pid: 2,
                pname: "Kids Shirts and Pents",
                size: ["L","M","S"],
                color: ["red","green","yellow"],
                Price:  1900
            }
];
// // console.log(products);   Calling All Products
console.log(products[1].pname);  //  Calling Single product items Using Index  [Women Shirts]