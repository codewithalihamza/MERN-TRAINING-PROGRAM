//          1

// Print a Table.

// var number=10;
// for(var i=0;i<=10;i++){
//     console.log(number+"X"+i+"="+number*i);
// }


//          2


// display number -10 to 10
// for(var i=-10; i<=10;i++)
// {
//     console.log(i);
// }


//          3


// Swap a value with varriable 
// var a=10;
// var b=20;
// var c=a+b;  //30
// b=c-b;      //30-20=10
// a=a+b;      //10+10=20
// console.log("10 is old Value of a and now new value of a= " + a);
// console.log("20 is old Value of b and now new value of b= " + b);


// Swap without a new varriable
// var a=10;
// var b=20;
// a=a+b;  //10+20=30
// b=a-b ;  //30-20=10
// a=a-b;  //30-10=20
// console.log("10 is old Value of a and now new value of a= " + a);
// console.log("20 is old Value of b and now new value of b= " + b);




//          4



//Find Even and odd number
// a=9;
// if(a%2==0){
//     console.log("Evern Number");
// }
// else {
//     console.log("Odd Number");
// }



//          5



// if age is 18+ then eligible for the card
// age=18;
// if(age<=18){
//     console.log("you are Eligible for the Card");
// }
// else {
//     console.log("you are not Eligible for the Card");
// }




//          6




// input form user a year and show it's leap or not 
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
//   const year = 2024;
//   if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }
    


 //             7




 // input min and max number show even and odd || 2 is minimum number and 5 is maximum number

//  const min = 2;
//  const max = 5;
 
//  console.log(`Even numbers between ${min} and ${max}:`);
//  for (let i = min; i <= max; i++) {
//    if (i % 2 === 0) {
//      console.log(i);
//    }
//  }
 
//  console.log(`Odd numbers between ${min} and ${max}:`);
//  for (let i = min; i <= max; i++) {
//    if (i % 2 !== 0) {
//      console.log(i);
//    }
//  }


// const numbers = [10, 5, 8, 3, 12, 1];
// const min = Math.min(...numbers);
// const max = Math.max(...numbers);
// console.log("The minimum number is:", min);
// console.log("The maximum number is:", max);




//          8




//make a single program where we use 4 pilar of programming oops
// Defining a class 'Animal'
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    // Encapsulating behavior: Getter method
    getAge() {
      return this.age;
    }
    
    // Polymorphism: Method overriding
    speak() {
      console.log("The animal makes a sound");
    }
  }
  
  // Inheriting 'Animal' class and defining a new class 'Cat'
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
    
    // Encapsulation of data: Getter and setter methods
    getColor() {
      return this.color;
    }
    
    setColor(color) {
      this.color = color;
    }
    
    // Polymorphism: Method overriding
    speak() {
      console.log("Meow!");
    }
  }
  
  // Creating an object of 'Cat' class and calling its methods
  let myCat = new Cat("Fluffy", 2, "gray");
  console.log(myCat.getName()); // Output: Fluffy
  console.log(myCat.getAge()); // Output: 2
  console.log(myCat.getColor()); // Output: gray
  myCat.setColor("white");
  console.log(myCat.getColor()); // Output: white
  myCat.speak(); // Output: Meow!