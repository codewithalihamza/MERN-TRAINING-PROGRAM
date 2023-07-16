// Sum all products rating, then draw an average of all products


let products = [
    {
    id: 1,
    name: 'Shark Ultra',
    totalRatings: 126,
    oldPrice: 699,
    newPrice: 230,
    variations: [
                    {
                    id: 101,
                    color: 'black',
                    price: '240',
                    qty: 12,
                    status: false,
                    },
                    {
                    id: 102,
                    color: 'gray',
                    price: '220',
                    qty: 0,status: true,
                    },
                    {
                    id: 103,
                    color: 'silver',
                    price: '250',
                    qty: 7,
                    status: true,
                    }, 
                ],
    brand: 'shark',
    desc: 'INCREDIBLE SUCTION AND SONIC MOPPING: First, it’s an ultrapowerful whole home vacuum on carpets and floors that empties its own dustbin.',
    comments: [
                {
                uId: 111,
                name: "ali",
                subj: "Good Product",
                desc: "I purchase this product which is find good",
                date: "28-11-2022",
                rating: 4.5,
                isApproved: false
                },
                {
                uId: 222,
                name: "faisal",
                subj: "Faulty Product",
                desc: "I am not satisfied with Product Quality",
                date: "26-10-2022",
                rating: 2,
                isApproved: false
                },
                {
                uId: 333,
                name: "nasir",
                subj: "Nice Product",
                desc: "Amazon providing standarized products",
                date: "26-10-2022",
                rating: 5,
                isApproved: false
                },
             ],
    countInStock: 19,
    isAvailble: false
    },
    // -------------------
    {
    id: 2,
    name: 'LED TV',
    totalRatings: 150,
    oldPrice: 75000,
    newPrice: 70000,
    variations: [
                    {
                    id: 101,
                    color: 'white',
                    price: '65000',
                    qty: 2,
                    status: true,
                    },
                    {
                    id: 102,
                    color: 'gray',
                    price: '68000',
                    qty: 1,
                    status: true,
                    },
                    {
                    id: 103,
                    color: 'black',
                    price: '80000',
                    qty: 18,
                    status: true,
                    }, 
                ],
    brand: 'tv',
    desc: 'INCREDIBLE SUCTION AND SONIC MOPPING: First, it’s an ultrapowerful whole home vacuum on carpets and floors that empties its own dustbin.',
    comments: [
                {
                uId: 1111,
                name: "ahmad",
                subj: "Average Product",
                desc: "An average product provided to me",
                date: "10-02-2022",
                rating: 3.5,
                isApproved: false
                },
                {
                uId: 2222,
                name: "shumail",
                subj: "Faulty Product",
                desc: "Ever experience Amazon is not providing best quality products",
                date: "05-03-2022",
                rating: 2,
                isApproved: false
                },
                {
                uId: 3333,
                name: "toufeeq",
                subj: "Good Product",
                desc: "A good product is available with Amazon",
                date: "14-10-2022",
                rating: 5,
                isApproved: false
                },
                {
                uId: 4444,
                name: "aslam",
                subj: "averageProduct",
                desc: "An average product in quality",
                date: "14-10-2022",
                rating: 3,
                isApproved: false
                }
            ],
    countInStock: 21, 
    isAvailble: true
    },
    {
    id: 3,
    name: 'Samsung',
    totalRatings: 40,
    oldPrice: 340000,
    newPrice: 332000,
                variations: [
                {
                id: 101,
                color: 'white',
                price: '340000',
                qty: 10,
                status: true,
                },
                {
                id: 102,
                color: 'gray',
                price: '305000',
                qty: 2,
                status: true,
                },
                {
                id: 103,
                color: 'black',
                price: '335000',
                qty: 12,
                status: true,
                }, 
            ],
    brand: 'mobile',
    desc: 'INCREDIBLE SUCTION AND SONIC MOPPING: First, it’s an ultrapowerful whole home vacuum on carpets and floors that empties its own dustbin.',
    comments: [
                {
                uId: 100,
                name: "imran",
                subj: "Average Product",
                desc: "An average product provided to me",
                date: "24-05-2022",
                rating: 4,
                isApproved: false
                },
                {
                uId: 101,
                name: "hassan",
                subj: "Product",
                desc: "Amazon is not providing best quality products",
                date: "15-07-2022",
                rating: 2.5,
                isApproved: false
                }, 
            ],
    countInStock: 24, 
    isAvailble: true
    }
    ]


   var sum=0;
    var total=0;
    for(var i=0; i<products.length;i++){
    for(var j=0; j<products[i].comments.length; j++) {
        // console.log(products[i].comments[j].name);

           sum= sum+(products[i].comments[j].rating);
        //    total=total+(products[i].comments[j].rating.length)
total=sum/products;
    total = sum/products;

    var a =0;
    }   
    }
    console.log(sum);
    console.log(total);
    

    // Average = sum of rating/total no of ratingrating;