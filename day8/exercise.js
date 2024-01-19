// let body = document.querySelector("body");
// let btn = document.querySelector("#btn");
// let btn2 = document.querySelector("#btn2");

// btn.addEventListener("click", () => {
//     body.style.background = "black";
//     body.style.color = "white";
// });

// btn2.addEventListener("click", () => {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
// });

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let para = document.querySelector("p");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
         currMode = "dark";
        //  document.querySelector("body").style.background = "black";
        // body.style.background = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        // body.style.background = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
})