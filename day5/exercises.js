/**
 *? Q1: Create a function using the "function" keyword that takes a string as an argument 
 *? and returns the number of vowels in the string.
 **/



function countVowels(str) {
    let count = 0;
    for (const char of str) {
        
        if (char === "a" || 
        char === "e" || 
        char === "i" || 
        char === "o" || 
        char === "u") {
            count++;
        }
    }
    
    return count;
}


/**
 * ? Q2: Create an arrow function to perform the same task
 * */

const countVow = (str) => {
        let count = 0;
        for (const char of str) {
    
            if (char === "a" ||
             char === "e" || 
             char === "i" || 
             char === "o" || 
             char === "u") {
                count++;
            }
        }
        
        return count;
    }


    /**
     * ? Q3: For a given array of numbers, print the square of each value using the forEach loop.
     **/ 


    /*
    nums.forEach((num) => {
            console.log(num * num);
        })
        */

        //  We can write callback funtion like this as well
      /*  let calcSquare = (num) => {
            console.log(num * num);
        }

         nums.forEach(calcSquare);
        */

        /**
         *?  Q4: We are given array of marks of students. Filter out of the marks of students that scored 90+.
         **/

        //  Solution:
       
       /* let studentMarks = [88, 55, 98, 99, 92, 34, 56 ,78, 92];

        let result = studentMarks.filter((val) => {
            return val > 90;
        });

        console.log(result); */


        /**
         * ?  Q5: Take a number n as input from user. Create an array of numbers from 1 to n.
         * ? Use the reduce method to calculate sum of all numbers in the array.
         * ? Use the reduce method to calculate product of all numbers in the array.
         **/

        let n = prompt("Enter your number");

        let arr = [];

        for (let i = 1; i<= n; i++) {
            arr[i - 1] =i;
        }

        console.log(arr);

        let sum = arr.reduce((res, curr) => {
            return res + curr;
        });

        console.log("sum = ",sum);

        let factorial = arr.reduce((res, curr) => {
            return res * curr;
        })

        console.log("factorial = ", factorial);

        // let userArr = [1 + userNum];
        // let calculateArr = userArr.reduce((val) => {
        //     return val;
        // })

        // console.log(calculateArr);