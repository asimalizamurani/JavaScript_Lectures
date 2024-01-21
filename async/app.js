// Asynchronous

/* console.log("hey1");
setTimeout(function(){
    console.log("hey2");
},2000); */

/* console.log("hey1");
console.log("hey2");
setTimeout(function(){
    console.log("hey3");
},0);
console.log("hey4"); */


/*   <<<<<<<<<<<<<<<<<<<<<<   Promises   >>>>>>>>>>>>>>>>>>>>*/ 
/*
let userValue = confirm("Do you want to confirm it");
let ans = new Promise((res, rej) => {
    if(userValue) {
        return res();
    }
    else {
        return rej();
    }
});

ans.then(function() {
    console.log("successfully completed");
})
.catch(function() {
    console.log("not completed");
});
*/


//  Question of Promise
// Q1: User will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject
/*
let result = new Promise((res, rej) => {
    let n = Math.floor(Math.random() * 10);

    if(n < 5) {
        return res();
    }
    else {
        return rej();
    }
});

result.then(function() {
    console.log("below");
})
.catch(function() {
    console.log("above");
});
*/


/*
Q2: 
1: First of all go to home
2: Open the door and close the door
3: Cook food and eat
4: Study for 1 hour
5: Then go to bed
*/ 

let answer = new Promise((res, rej) => {
    return res("First of all go to home");
});

let p2 = answer.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Open the door and close the door");
    });
});

let p3 = p2.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Cook food and eat");
    });
});

let p4 = p3.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Study for 1 hour");
    });
});

let p5 = p4.then(function(data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("Then go to bed");
    });
});

p5.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});