//  for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         // console.log(`innner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }  
// }

// let myArray = ["flash", "batman", "superman"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }

//  break  and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
}