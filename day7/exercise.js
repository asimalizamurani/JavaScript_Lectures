/**
 * ? Q1: Create a new button element. Give it a text "click me", background color
 * ? of red & text color of white.
 * ? Insert the button as the first element inside the body tag.
 * */ 

let btn = document.createElement("button");
let body = document.querySelector("body");
btn.innerText = "click me";
btn.style.backgroundColor = 'red';
btn.style.color = "white";

body.prepend(btn);

// console.log(btn);


/**
 * ? Q2: Create a <p> tag in html, give it a class & some styling.
 * ? Now create a new class in CSS and try to append this class to the <p> element.
 * 
 * ? Did you notice, how you overwrite the class name when you add a new class.
 * ? Solve this problem using classList
 * */

let para = document.querySelector("p");
let classs = para.getAttribute("class");

// ? Whenever you use setAttribute("first-class-name", "second-class-name") then secon class replace the first class

// para.setAttribute('class', "paracl2");

para.classList.add("para", "paracl2");  // it adds the second class

// para.classList.remove("paracl2");  // it removes the class

