// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item ) => {
//     console.log(item);
//     return item 
// })
// console.log(values );

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>  {
//     return num > 4
// } )


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4 ){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {tittle: 'Book one' , genre: 'Fiction' , publish: 1981 , edition: 2004},

    {tittle: 'BookTwo' , genre: 'Non-Fiction' , publish: 1992 , edition:2008},

    {tittle: 'Book Three' , genre: 'History' , publish: 1999 , edition:2007},

    {tittle: 'Book Four' , genre: 'Non-Fiction' , publish: 1989 , edition:2010},

    {tittle: 'Book Five' , genre: 'Science' , publish: 2009 , edition:2014},

    {tittle: 'Book Six' , genre: 'Fiction' , publish: 1987 , edition:2010},

    {tittle: 'Book Seven' , genre: 'History' , publish: 1986 , edition:1996},

    {tittle: 'Book Eight' , genre: 'Science' , publish: 2011 , edition:2016},

    {tittle: 'Book Nine' , genre: 'Non-Fiction' , publish: 1981 , edition:1989},
    
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')
const userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History')
console.log(userBooks);

