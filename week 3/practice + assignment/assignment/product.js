let products = [
  {
    id: 1,
    name: "Shark Ultra",
    totalRatings: 126,
    oldPrice: 699,
    newPrice: 230,
    variations: [
      {
        id: 101,
        color: "black",
        price: "240",
        qty: 12,
        status: false,
      },
      {
        id: 102,
        color: "gray",
        price: "220",
        qty: 0,
        status: true,
      },
      {
        id: 103,
        color: "silver",
        price: "250",
        qty: 7,
        status: true,
      },
    ],
    brand: "shark",
    desc: "INCREDIBLE SUCTION AND SONIC MOPPING: First, it’s an ultrapowerful whole home vacuum on carpets and floors that empties its own dustbin.",
    comments: [
      {
        uId: 111,
        name: "ali",
        subj: "Good Product",
        desc: "I purchase this product which is find good",
        date: "28-11-2022",
        rating: 4.5,
        isApproved: false,
      },
      {
        uId: 222,
        name: "faisal",
        subj: "Faulty Product",
        desc: "I am not satisfied with Product Quality",
        date: "26-10-2022",
        rating: 2,
        isApproved: false,
      },
      {
        uId: 333,
        name: "nasir",
        subj: "Nice Product",
        desc: "Amazon providing standarized products",
        date: "26-10-2022",
        rating: 5,
        isApproved: false,
      },
    ],
    countInStock: 19,
    isAvailble: false,
  },

  // -------------------

  {
    id: 2,
    name: "LED TV",
    totalRatings: 150,
    oldPrice: 75000,
    newPrice: 70000,
    variations: [
      {
        id: 101,
        color: "white",
        price: "65000",
        qty: 2,
        status: true,
      },
      {
        id: 102,
        color: "gray",
        price: "68000",
        qty: 1,
        status: true,
      },
      {
        id: 103,
        color: "black",
        price: "80000",
        qty: 18,
        status: true,
      },
    ],
    brand: "tv",
    desc: "INCREDIBLE SUCTION AND SONIC MOPPING: First, it’s an ultrapowerful whole home vacuum on carpets and floors that empties its own dustbin.",
    comments: [
      {
        uId: 1111,
        name: "ahmad",
        subj: "Average Product",
        desc: "An average product provided to me",
        date: "10-02-2022",
        rating: 3.5,
        isApproved: false,
      },
      {
        uId: 2222,
        name: "shumail",
        subj: "Faulty Product",
        desc: "Ever experience Amazon is not providing best quality products",
        date: "05-03-2022",
        rating: 2,
        isApproved: false,
      },
      {
        uId: 3333,
        name: "toufeeq",
        subj: "Good Product",
        desc: "A good product is available with Amazon",
        date: "14-10-2022",
        rating: 5,
        isApproved: false,
      },
      {
        uId: 4444,
        name: "aslam",
        subj: "averageProduct",
        desc: "An average product in quality",
        date: "14-10-2022",
        rating: 3,
        isApproved: false,
      },
    ],
    countInStock: 21,
    isAvailble: true,
  },

  //--------------

  {
    id: 3,
    name: "Samsung",
    totalRatings: 40,
    oldPrice: 340000,
    newPrice: 332000,
    variations: [
      {
        id: 101,
        color: "white",
        price: "340000",
        qty: 10,
        status: true,
      },
      {
        id: 102,
        color: "gray",
        price: "305000",
        qty: 2,
        status: true,
      },
      {
        id: 103,
        color: "black",
        price: "335000",
        qty: 12,
        status: true,
      },
    ],
    brand: "mobile",
    desc: "INCREDIBLE SUCTION AND SONIC MOPPING: First, it’s an ultrapowerful whole home vacuum on carpets and floors that empties its own dustbin.",
    comments: [
      {
        uId: 100,
        name: "imran",
        subj: "Average Product",
        desc: "An average product provided to me",
        date: "24-05-2022",
        rating: 4,
        isApproved: false,
      },
      {
        uId: 101,
        name: "hassan",
        subj: "Product",
        desc: "Amazon is not providing best quality products",
        date: "15-07-2022",
        rating: 2.5,
        isApproved: false,
      },
    ],
    countInStock: 0,
    isAvailble: true,
  },
];


//10. If rating is greater than or equal to 4, please convert its status from false to true.

// for(let i=0; i<products.length; i++){
//     for(let j=0; j<(products[i].comments).length; j++){
//         if(products[i].comments[j].rating >= 4){
//             products[i].comments[j].isApproved= true;
//             console.log(`Name of this person is "${products[i].comments[j].name}" which rating is best "${products[i].comments[j].rating}" and now status is "${products[i].comments[j].isApproved}"`);
//         }
//     }
// }





//-----------------------------------------------


// 9. How many products are available in gray colors, print their name and new price.

// function clrchk(x){
// let clr=0;
// for(let i=0; i<products.length; i++){
//     for(let j=0; j<(products[i].variations).length; j++){
//         if(products[i].variations[j].color== x){
//              clr++;
//             console.log(products[i].name);
//         }
//     }
// }
// console.log("These products in gray color : " + clr);
// }

// clrchk('black');



//-------------------------------------------------


// 8. Which product is higher in rating amongst all products, print the name and price of that category as well.

// let hRating=0;
// for(let i=0; i<products.length; i++){
//     if(products[i].totalRatings>hRating){
//         hRating=products[i].totalRatings;
// }
// }
// let rtName=0;
// for(let j=0; j<products.length; j++){
//     if(hRating==products[j].totalRatings){
//         // console.log(products[j].name);
//         rtName=products[j].name;
//     }
// }

// console.log(`This Product "${rtName}" is highst rating : ${hRating}`);



//-------------------------------------------------


// 6. total price of all stock (new price)

// let oPrice=0;
// let nPrice=0;

// for(let i=0; i<products.length; i++){
//     nPrice+=products[i].newPrice;
//     oPrice+=products[i].oldPrice;
// }
// console.log("This is New Price " + nPrice);
// console.log("This is Old Price " + oPrice);





//--------------------------------------------


// 5. Total available stock (countInStock) of all products 

// let tStock=0;
// for(let i=0; i<products.length; i++){
//     tStock+=products[i].countInStock;
// }
// console.log(tStock);





//----------------------------------------------------------------------





// 4. if stock of any product reach to zero convert its status from true to false.

// for(let i=0; i<products.length; i++){
//     if(products[i].countInStock==0){
//         console.log("Out Of Stock This Product :" + products[i].name)
//         products[i].isAvailble=false;
//     }
//     else{
//         console.log("Available For Shop :" + products[i].name);
//     }
// }
// console.log(products[2].isAvailble);



//-------------------------------------------------


// 2. Sum all products rating, then draw an average of all products
// Ultra average rating is ???
// LED average rating is ??



// let cntRat=0;
// for(let i=0; i<products.length; i++){
//     // console.log(products[i].totalRatings)
//     cntRat+=products[i].totalRatings;
// }
// console.log("Total Rating "+cntRat);



// // For check LED rating furthur
// for(let i=0; i<products.length; i++){
//     if(products[i].name=="LED TV"){
//         console.log("Rating indivisual " +products[i].totalRatings)
//     }
    
// }




//---------------------------------------------------



// 1. How many people have given comments, print their names as well.

// let cmtCount=0;
// for (let i = 0; i < products.length; i++) {
//   for (let j = 0; j < (products[i].comments).length; j++) {
//       console.log(products[i].comments[j].name);
//      cmtCount ++;
//     }
// }
// console.log(`Total Number of Comments : ${cmtCount}`);
