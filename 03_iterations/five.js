const coding = ["js" , "ruby" , "java","python", "cpp"]

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python" ,
        languageFileName: "py" 
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})