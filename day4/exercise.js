// Q1: For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// find the average marks of the entire class.
// Solutions:::

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`ave marks of the class = ${avg}`);


// Q2: For a given array with prices of 5 times -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price agter
// applying offer
// Solutions:::

// let items = [250, 645, 300, 900, 50];

// ******   First way     **********
// let i = 0;
// let idx = 0;
// for (let val of items) {
//     // console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// ********

// ************    Second Way    ***********

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);