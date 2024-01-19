/**
 * !    Exercises Practice Questions -->
*!   Q1: Create a h2 heading element with text - "Hello JavaScript". Append "from Apna College
* !   students" to this text using JS. Append means to add something from the last -->
 * */ 

// let h2 = document.querySelector('h2');
// console.log(h2.innerText);

// h2.innerText = h2.innerText + " from apna college students";

/**
 * ? Q2: Create 3 divs with common class name="box" Access them and add some unique text to each of them.
 * */ 
let divs = document.querySelectorAll(".box");

let ndx = 1;
for(div of divs) {
    div.innerText = `new unique value ${ndx}`;
    ndx++;
}

/** 
 * ? This is the simple way and the above one is the better way.
*/

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";