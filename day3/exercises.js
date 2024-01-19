// Q1: Print all even numbers from 0 to 100.

// for(let i = 0; i <= 100; i++) {
    
//     if(i%2 === 0) {
//         console.log(i);
//     };
// };

// Q2: Create a game where you start with any random game number. Ask the user to keep
// guessing the game number untill the user enters correct value.
// Solution:

// let gameNum = 25;
// let userNum = prompt("Guess the game number :");

// while(userNum != gameNum) {
//  userNum = prompt("You entered wrong number. Guess again :");
// }

// console.log("Congratulations, you entered the right number");

// &&&&&&&&&&&&&&&&   Two questions of Strings   &&&&&&&&&&&&&&&&&&&&&&
// Q1: Prompt the user to enter their full name. Generate a username for them based 
// on the input. Start username with @, followed by their full name and ending with
// the fullname length.
// eg: user name = "asimali", username should be "@asimali48"

// Solution:
let userName = prompt("Enter your full name without spaces");
 console.log(`@${userName}${userName.length}`);
