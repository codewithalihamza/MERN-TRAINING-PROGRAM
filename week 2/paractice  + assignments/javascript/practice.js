//var marks=10
//marks == 50 ? console.log("talha is passed") : console.log("failed");
//https://flexboxfroggy.com/


//loops
// for(var a=0; a<=5; a++){
//     console.log(a)
// }



// var cities=["LHR","ISB","KAR","BHA"];
// for(var i=0; i<cities.length; i++){
//     if(cities[i]=="ISB")
//     {
//         console.log("Islamabad is best city " + cities[i]);
//     }
//     else{
//         console.log(cities[i])
//     }
// }


// var students = [
//     {
//         rollNo: 101,
//         sName: "Ghulam Hussain",
//         age: 21,
//         course: ["C++", "Java", "C Sharp"],
//         fee: 2500000,
//         isActive: false
//     },
//     {
//         rollNo: 102,
//         sName: "Umar Aman Ullah",
//         age: 20,
//         course: ["Swift", "Java", "Python", "AI", "MERN"],
//         fee: 1200000,
//         isActive: true
//     },
//     {
//         rollNo: 103,
//         sName: "Muhammad Ali Qazi",
//         age: 26,
//         course: ["WordPress", "Php", "MySql", "MERN", "Figma"],        
//         fee: 200000,
//         isActive: false
//     },
//     {
//         rollNo: 104,
//         sName: "Muhammad Awais",
//         age: 23,
//         course: ["AI", "NFT", "BlockChain", "MetaVerse"],        
//         fee: 200000,
//         isActive: false
//     },

// ]

// for(var i=0; i<=students.length; i++){
//     for(var j=0; j<students[i].course.length; j++)
//     {
//         if(course[j]=="AI")
//         {
//             console.log(students[i].sName[j])
//         }
//     }
// }





// for (var i = 0; i < students.length; i++) {
//     if (students[i].course.includes("AI")) {
//       console.log(students[i].sName + " is taking AI course.");
//     }
//   }


// push add at the end
// pop remove form the end 
// unshift add at the beginning 
// shift remove from the begining

//functions


var product=[
    {
    name: "sugar",
    weight: 20,
    price:170,
    comment:[{
            uId: 12,
            name: "ijaz",
            subj: "Good Product",
            desc: "I purchase this product which is find good",
            date: "28-11-2022",
            rating: 4.5
        },{
            uId: 12,
            name: "raza",
            subj: "Good Product",
            desc: "I purchase this product which is find good",
            date: "28-11-2022",
            rating: 4
    }]
},
{
    name: "Matchs",
    weight: 25,
    size: ["s","med","l"],
    price:130,
    comment:[{
        uId: 11,
        name: "ali",
        subj: "Good Product",
        desc: "I purchase this product which is find good",
        date: "28-11-2022",
        rating: 4.5
    },{
        uId: 12,
        name: "hamza",
        subj: "Good Product",
        desc: "I purchase this product which is find good",
        date: "28-11-2022",
        rating: 4.9
        }
]
}
];


// console.log(product[0].comment[0]);

// for(var i=0; i<=product.length; i++){
//     if(product[i].price>150){
//         console.log(product[i].name + product[i].comment);
//     }
// }

// console.log(product.comment[1])

for (var i = 0; i < product.length; i++) {
    for (var j = 0; j < product[i].comment.length; j++) {
        if (product[i].comment[j].rating > 4.5) {
            console.log(product[i].comment[j].name);
        }
    }
}