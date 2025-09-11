// console.log("M");
// console.log("a");
// console.log("y");
// console.log("a");
// console.log("n");
// console.log("k");

function sayMyName(){
    console.log("M");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("k");
}
// sayMyName()



// function addTwoNumbers (number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3 , 5)

// console.log( "result" , result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage())



function calculateCartPrice(...num1){
    return num1 
}
 
// console.log(calculateCartPrice(200,400,500 , 2000 ))

const user = {
    username: "hitesh",
    price: 199 
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]))
