// OOPS IN JS
/*
const student = {
    fullName: "Asim",
    marks: 85.0,
    printMarks: function() {
        console.log("marks = ", this.marks); //this.marks : means student.marks
    }
}

*/

// let arr = ["apple", "banana", "pineapple"];

const employee = {
    // We can use these two methods for functions inside the object
    calcTax() {
        console.log("Taxes are important");
    },
    // calcTax2: function () {
    //     console.log("hello")
    // }
}

//............................................ Prototype ...................................................

/*
const AsimAli = {
    salary: 50000,
}
const AsimAli2 = {
    salary: 50000,
}
const AsimAli3 = {
    salary: 50000,
}
const AsimAli4 = {
    salary: 50000,
}

AsimAli.__proto__ = employee;
AsimAli2.__proto__ = employee;
AsimAli3.__proto__ = employee;
AsimAli4.__proto__ = employee;
*/


//....................................... Classes in JS    ...........................................
// ......................   Constructor in JS ................................
/*
class ToyotaCar {

    constructor(brand) {
        console.log("Creating new object");
        this.brand = brand;
    }
    start() {
        console.log("Toyota Car Started");
    }
    stop(){
        console.log("Toyota Car Stopped");
    }
    // setBrand(brand) {
    //     this.brandName = brand;
    // }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let toyota = new ToyotaCar();
toyota.setBrand("toyota");
*/

// let corola = new ToyotaCar("corola"); // constructor
// let TZ = new ToyotaCar();  // constructor


/*           ............................   Inheritance  .......................           */

class Person {
    constructor(name) {
        // console.log("enter parent constructor");
        this.species = "homo sapies";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    constructor(name) {
        // console.log("enter child constructor");
        super(name); // to invoke parent class constructor
          
            // console.log("exact child constructor");
    }

    work() {
        super.eat();
        console.log("Solve problems and build such things");
    }
}

// class Doctor extends Person {
//     work() {
//         console.log("To treate the patients");
//     }
// }

let engobj = new Person("asim");

