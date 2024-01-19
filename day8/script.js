let btn1 = document.querySelector("#btn1");

/* btn1.onclick = (evt) => {
    console.log(evt);
    console.log("The event type is :", evt.type);
    console.log("The event target is :", evt.target);
    console.log("The event clientX is :", evt.clientX);
    console.log("The event clientY is :", evt.clientY);
    // console.log("btn1 was clicked");
    // let a = 45;
    // a++;
    // console.log(a) //46
}
*/

btn1.addEventListener("click", () => {
    console.log("Button was clicked by handler 1");
})
btn1.addEventListener("click", () => {
    console.log("Button was clicked by handler 2");
})
const handler3 = () => {
    console.log("Button was clicked by handler 3");
};
btn1.addEventListener("click", () => {
    console.log("Button was clicked by handler 4");
});

btn1.addEventListener("click", handler3);

btn1.removeEventListener("click", handler3);

let box = document.querySelector("div");

box.onmouseover = () => {
    // console.log("you are inside the div");
}