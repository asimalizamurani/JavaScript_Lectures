// console.log("hello");
// window.console.log("hello2");
// window.alert("I am a part of window object")

// console.dir(document.body);
// console.log(document.body)

// console.log(document.head);
// document.body.childNodes[3].innerText = "Asim";

// ! <<<<<<<<<<<<<<<<<<<,       Accessing Elements Using DOM            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// ? <<<<<<<<<<<<<<<<<<<,       Accessing h1 by its id             >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// let heading = document.getElementById('heading'); //h1
// console.log(heading);

// console.dir(heading);
// ? <<<<<<<<<<<<<<<<<<<,       Accessing buttton by its id             >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// let button = document.getElementById('mybtn');
// console.dir(button);

// ? <<<<<<<<<<<<<<<<<<<,       Accessing headings by their class names           >>>>>>>>>>>>>>>>>>>>>>>>>>.
// let headings = document.getElementsByClassName('myclass');
// console.dir(headings);
// console.log(headings);

// ? <<<<<<<<<<<<<<<<<<<,    Accessing paragraphs by tag names       >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// let para = document.getElementsByTagName('p');
// console.dir(para);

// ! <<<<<<<<<<<<<<<<<<<, Using query selectors accessing the Elements   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// ? <<<<<<<<<<<<<<<<<<<, document.querySelector('p') returns only first element.  >>>>>>>>>>>>>>>>>>.
// let firstE = document.querySelector('p');
// console.dir(firstE);

// ? <<<      document.querySelectorAll("p") | returns all paragraphs elements NodeLists      >>>>>>>.
// let elements = document.querySelectorAll("p");
// console.dir(elements);

// ? <<<<<<<<<<<<<<<<<<<,       Accessing class by query selector      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// let allElements = document.querySelectorAll(".myclass");
// console.dir(allElements);

// ? <<<<<<<<<<<<<<<<<<<,       Accessing id using query selector     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

// let myButton = document.querySelector("#mybtn");
// console.dir(myButton);

// console.dir(document.body.firstChild);


// let div = document.querySelector("div");
// console.dir(div);

// !  like this we can create new HTML elements inside HTML using inner.HTML
// let div2 = document.querySelector("div").innerHTML = "<div>inner div</div>";
// console.log(div2)

// let newHeading = document.querySelector("h2").innerText = "new heading";
// let heading = document.querySelector("h1");
// console.log(heading);


// let newDiv = document.innerTHML = "<div> inner div </div>";
// console.log(newDiv);