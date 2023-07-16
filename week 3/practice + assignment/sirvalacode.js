// let arr1 = [44, 55, 66]
// let arr2 = [100, 101, 102]

// let arr3 = [...arr1, ...arr2]

// console.log(arr3)


// De-structuring

// let stu = [
    
//     {
//         id: 1,
//         name: "abc"
//     },
//     {
//         id: 2,
//         name: "abc"
//     },
//     {
//         id: 3,
//         name: "abc"
//     },

// ]

// let [s1, s2, s3] = stu

// console.log(s1.name)


// let num = [34, 56, 77, 88]

// let[num1, num2, num3, num4] = num;
// console.log(num2)


// let stu = {
//     id: 1, 
//     name: "ali",
//     course: "bcs",
//     university: "PU",
//     fee: 50000,
//     isActive: true
// }

// let {id, name, ...abc} = stu

// console.log(abc)

// console.log(id)
// console.log(name)


// let stu = {
//     id: 1, 
//     name: "ali",
//     fee: 50000,
//     isActive: true
// }

// let {id, name, fee, isActive} = stu

// console.log(fee)




// console.log(id)
// console.log(name)






// Spread Operator

// let stu = {
//     id: 1, 
//     name: "ali",
//     fee: 50000,
//     isActive: true
// }

// let stu2 = {...stu}; 

// stu2.name = "Hassan"

// console.log(stu)
// console.log(stu2)



// let stu = {
//     id: 1, 
//     name: "ali",
//     fee: 50000,
//     isActive: true
// }

// let stu2 = stu; 

// stu2.name = "Hassan"

// console.log(stu)
// console.log(stu2)


// let num = [1, 2, 3, 4, 6]

// let num2 = [...num]; 

// num2[0] = 10

// console.log(num)
// console.log(num2)


// let num = [1, 2, 3, 4, 6]

// let num2 = num; 

// num2[0] = 10

// console.log(num)
// console.log(num2)





// filter 


// let pro = [1, 2, 3, 4]
// let res = pro.filter(x => x!=3)
// console.log(res)


// let abc = [-1, 0, 1, -2, 2]
// let res = abc.filter(x => x+1)

// console.log(res)

// result
// 0, 1, -2, 2

// let cities = ["LHR", "KAR", "ISB", "MTN", "LHR"]
// let res = cities.filter(x => x == "LHR")
// console.log(res)

// let cities = ["LHR", "KAR", "ISB", "MTN", "LHR"]
// for(let i = 0; i<cities.length; i++){
//     if(cities[i] == "LHR"){
//         console.log(cities[i])
//     }
// }



// map

// let products = [
//     {
//         id: 1,
//         name: 'cloth 1',
//         price: 5000,
//         onSale: true
//     },
//     {
//         id: 2,
//         name: 'cloth 2',
//         price: 4500,
//         onSale: false
//     },
//     {
//         id: 3,
//         name: 'cloth 3',
//         price: 5500,
//         onSale: true
//     },
// ]


// let res = products.map(x => x)
// console.log(res)

// let num = [45, 55, 23, 45, 55]

// console.log(num)
// console.log(num.map(x=>x>50))

// let num = [45, 55, 23, 45, 55]

// console.log(num)
// console.log(num.map(x=>x+5))



// let num = [45, 55, 23, 45, 55]

// let abc = num.map(x=>x+5);

// console.log(num)
// console.log(abc)



// let num = [45, 55, 23, 45, 55]
// let newMarks = [];

// for(let i = 0; i<num.length; i++)
// {
//     newMarks.push(num[i]+5)
// }
// console.log(num)
// console.log(newMarks)


// let num = [45, 55, 23, 45, 55]

// for(let i = 0; i<num.length; i++)
// {
//     console.log(num[i]+5)
// }


// Arrow functions 


// let abc = () => console.log("Game Train")
// abc()

// let abc = (x, y)=> x + y;
// console.log(abc(5, 4));




// function sum(x, y){
//     return x + y;
// }
// let abc = sum(5, 4)
// console.log(abc)

    





// function disMsg()
// {
//     console.log("Game Train")
//     return "hello";
// }
// let res = disMsg();
// console.log(res)
    




// let abc = (x) => x + 1;
// console.log(abc(5))



// function sum(x)
// {
//     return x + 1;
// }

// let abc = sum(5)
// console.log(abc)




// let abc = () => console.log("welcome to es6");
// abc()



// function msg()
// {
//     console.log("welcome to es6")
// }
// msg()




// console.log("hello")


// function msg(hello){
//     let fName
//     let lName
//     if(hello){
//         fName = "Ali"
//         lName = "Hassan"
//     }
//     console.log(fName)
//     console.log(lName)
// }
// msg(true)



// function msg(hello){
//     if(hello){
//         const fName = "Ali"
//         const lName = "Hassan"
//     }
//     console.log(fName)
//     console.log(lName)
// }
// msg(true)


// function msg(hello){
//     if(hello){
//         var fName = "Ali"
//         var lName = "Hassan"
//         console.log(fName)
//         console.log(lName)
//     }
// }
// msg(true)



// function msg(hello){
//     if(hello){
//         var fName = "Ali"
//         var lName = "Hassan"
//     }
//     console.log(fName)
//     console.log(lName)
// }
// msg(true)




// 1.	Let, var, const 

// var x = 5; 
// var x = 10; 
// var x = 15;
// console.log(x)

// const x = 5; 



// const whenWillBeEid = "23 April"

// if(whenWillBeEid){
//     const whenWillBeEid = "24 April"
//     console.log("internal : " + whenWillBeEid)
// }
// console.log("external : " + whenWillBeEid)



// let whenWillBeEid = "23 April"

// if(whenWillBeEid){
//     let whenWillBeEid = "24 April"
//     console.log(whenWillBeEid)
// }
// console.log(whenWillBeEid)




// var whenWillBeEid = "23 April"

// if(whenWillBeEid){
//     var whenWillBeEid = "24 April"
//     console.log(whenWillBeEid)
// }
// console.log(whenWillBeEid)






// var x = "Lahore";
// x = "Qalandar"
// console.log(x)

// let y = "Karachi"
// y = "Kings"
// console.log(y)



// const z = "Multan"
// z = "Sultan"
// console.log(z)



// var x = "Lahore";
// console.log(x)

// let y = "Karachi"
// console.log(y)


// const z = "Multan"
// console.log(z)




// 2.	Map 
// 3.	Filter
// 4.	Arrow functions 
// 5.	DE-structuring 
// a.	Object 
// b.	Array
// 6.	Spread Operator 
// 7.	Rest Operator 
// 8.	Async Await, Fetch Methods, Promises 
