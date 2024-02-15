/* ......................   Question 1   ....................... */
/*
You are creating a website for your college. Create a class User with 2 properties,
name and email. It also has a method called viewData() that allows user to view website data.
            ..................  Q2 is the second part of Q1 ......................
-->> Q2: Create a new class called Admin which inherits from User. Add a new method called
editDAta to Admin that allows it to edit website data.

*/ 

let Data = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data =", Data);
    }
}

class Admin extends User{
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "some new value"
    }
}

let student1 = new User("asim", "asim456@gmail.com");;
let student2 = new User("mehran", "mehran123@gmail.com");
let student3 = new User("Imtiaz", "imtiaz@gmail.com");

let teacher1 = new User("Sir Naeem", "govtbhssk@gmail.com");

let admin1 = new Admin("Sir Naeem", "naeem@gmail.com");