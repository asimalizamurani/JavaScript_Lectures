//  Print 1 to 5
//  for(let i = 1; i<=5; i++) {
//     console.log("Asim Ali");
//     console.log("Asim Ali Ismail");
//  }

// Calculate sum of 1 to 5 :
// let sum = 0;
// let n = 10;
// for(let i = 1; i<= n; i++) {
//     sum = sum + i;
// }
// console.log(`sum = ${sum}`)


/*  *************      Infinite Loop     *********************  */
// Don't use infinite loop because it never ends and it can damage your computer
// it will cover the all spaces in ram.
// for(let i =1; i >= 0; i++) {
//     console.log("i =", i);
// }

/*  *************      while Loop     *********************  */

// let i = 1;
// while(i <= 5) {
//     console.log("i = ", i);
//     i++;
// }

/*  *************     do while Loop     *********************  */
// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// }  while (i <= 10);


/*  *************     for-of Loop     *********************  */
// let size = 0;
// let str = "Code with Asim Ali";
// for(let i of str) {
//     console.log("i =", i);
//     size++;
// }

// console.log("string size = ", size);

/*  *************     for-in Loop     *********************  */
// let student = {
//     name: "Asim Ali",
//     fName: "Ismail",
//     class: "11th",
//     age: 18,
//     id:  4857426,
// };

// for(let key in student) {
//     console.log("key = ",key, "value", student[key]);
// }


/*  *************     Strings in JS     *********************  */
// let str = "AsimAli";
// console.log(str.length);
// console.log(str[5]) // l

// *********    Template Literals         **************  //
// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(" type is ",typeof specialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = (`The item is ${obj.item} and its price is ${obj.price}`);
//  console.log(`The addition of 2 + 1 = ${2 + 1}`);
// console.log(output)

/************    \n    ***************/
// \n is used to print a new line in string.
// \t is used to give tabe space.
// console.log("Asim \n Ali");
// console.log("Asim \t Ali");

// let str = "     Asim Ali         ";
// let str = "01234567";
// // let upperCase = str.toUpperCase();
// let lowerCase = str.toLowerCase();
// console.log(lowerCase);
// console.log(str);
// console.log(str.trim()) // removes whitespaces of beginning and ending.
// console.log(str.slice(1, 6));

// <<<<< &&&&&&&&&&&&&&    concat is used to join two strings or more than two       &&&&&&&&  >>>>>>>>>
// let str1 = "Asim";
// let str2 = "Ali";
// let str3 = "Ismali";
// let str4 = "Zamurani";
// let joinedStrings = str1.concat(str2,str3,str4);
// console.log(joinedStrings);


// &&&&& -------< replace >------- is used to replace the previous word with a new word.
// let strR = "How";
// let name = "Asim Ali";
// let str = "hellololopolo";
// console.log(strR.replace("H", "W")); // here i am replacing h with w.
// console.log(name.replace("Ali", "Ismail"));
// console.log(str.replaceAll("lo", "lp"));


//  &&&&&&&&  charAt   ::: ----> used to print the index of the characters  &&&&&&&&&&
// let str = "ILoveJS";
// console.log(str.charAt(2)); 

