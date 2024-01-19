// NaN this error means not a number

// function myFunction() {
//     console.log("Welcome to Balochistan");
//     console.log("Welcome to Hotabad");
//     console.log("Welcome to Nasirabad");
//     console.log("Welcome to Turbat");
//     console.log("Welcome to Kulaho");
// }

// myFunction(); // calling myfunction


// function myFunction2(msg, n){ // parameter -> input
//     console.log(msg*n);
// }

// myFunction2("I love to learn JS", 100); // argument


// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
   /*When we write return in our function we then after return we can't write some 
     other codes we can write before return but not after return.
     console.log("after return"); // it can not be executed.*/
// }

// let value = sum(14,4);
// console.log(value);

// const arrowsum = (a, b)=> {
//     console.log(a+b);
// }

// arrowsum(3,4);

/*<<<<<<<<<<<<<<<<<<<<<<<<    Multiplication arrow function      <<<<<<<<<<*/ 
// const arrowMulti = (x, y) => {
//     console.log(x * y);
// }

// arrowMulti(5, 5);        


/**
 * !_________________________   forEach  ____________________
 **/ 

// let arr1 = [1, 2, 3, 4, 5];
// let arr = ["karachi", "turbat", "quetta", "islamabad", "Lahore"];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })

/*  let nums = [2, 3, 4, 5, 6, 55, 66, 44, 33];

   let newArr = nums.map((val)=> {
       return val * 2;
    })

    console.log(newArr); */

   /* let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    let evenArr = arr.filter((val) => {
        return val > 5;
        // return val % 2 !==0; // used to print odd numbers
        // return val % 2 ===0; // used to print even numbers
    })
    
    console.log(evenArr)
    */
    
//  <<<<<<<<<<<<<<<<   reduce method   >>>>>>>>>>>>>>>>>>>>>

/*
let array1 = [1, 2, 31, 4, 5];

const output = array1.reduce((previous, current) => {
    // return previous + current;
    return previous > current ? previous : current; // We write this code to print the largest number of the array
});

console.log(output); 
*/