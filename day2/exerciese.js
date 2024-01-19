// Q1 : Get user to input a number using prompt("Enter a number:"). Check if the number
// is a multiple of 5 or not.

// ************** Code ******************

/* let number = prompt("Enter a number");

if (number %5 === 0) {
    console.log(number, "is multiple of 5");
} else {
    console.log(number, "is not multiple of 5");
} */

// Q2 : Write a code which can give grades to students according to their scores:
/*
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

/************** Code ******************/
let percentage = prompt("Enter your percentage to calculate your grade (0-100)");

if(percentage >=90 && percentage <=100) {
    console.log("Your grade is A");
}
else if (percentage >=70 && percentage <=89) {
    console.log("Your grade is B");
}
else if (percentage >=60 && percentage <=69) {
    console.log("Your grade is C");
}
else if (percentage >=50 && percentage <=59) {
    console.log("Your grade is D");
}
else if (percentage >=0 && percentage <=49) {
    console.log("Your grade is F");
}
else {
    console.log(" Sorry your input is not matching to the requirements please input your percentage again and your percentage must be <=100")
}

