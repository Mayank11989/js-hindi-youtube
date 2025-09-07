"use strict"; // treat all js code as newer version 

// alert(3+3)  we are using nodejs, not browser

let name = "hitesh"
let age = 18
let isLoggedIn = false

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object 

// console.log(typeof "hitesh");
// console.log(typeof null);



// Stack (Primitive)  , Heap (Non Primitive)


let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);

console.log(anothername);




let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);