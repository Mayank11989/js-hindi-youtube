const user = {
    // username: "Mayank",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , Welcome to Website`);
        // console.log(this);
    }
}
// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// const chai = () => {
//     let username = "Mayank"
//     console.log(this)
// }

// chai

// const addTwo = (num1 , num2)  => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))


const addTwo = (num1 , num2)  =>  (num1 + num2)

console.log(addTwo(3,4))
 

