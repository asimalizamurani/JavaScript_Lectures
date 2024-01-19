// let div = document.querySelector("div");
// console.log(div)

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector(".para");
// console.log(para.getAttribute("class"));

/**
 * ?  <<<<<<<<<<<<<<<<<<<<<<<        setAttribut        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 * */ 

// console.log(para.setAttribute("class", "newclass"));  // setAttribute will change paragraph class name.  

/**          
 *?   <<<<<<<<<<<<<<<<<         Style              >>>>>>>>>>>>>>>>>>>>>> 
**/ 

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
//  div.style.visibility = "hidden";

// div.style.fontSize = "26px";
// div.innerText = "Hello";


// ? _________________  Insert Elements  ____________________________

let newBtn = document.createElement("button");
let newHeading = document.createElement("h1");
let div = document.querySelector("div");
let para = document.querySelector("p");

// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

para.after(newBtn)

newBtn.innerText = "click me";


newHeading.innerHTML = "<h1>Hi I am a new heading</h1>";

 let body = document.querySelector("body");
body.prepend(newHeading);

// newBtn.remove();  Write the node name and you can remove any element by using remove word.

console.log(newBtn);
