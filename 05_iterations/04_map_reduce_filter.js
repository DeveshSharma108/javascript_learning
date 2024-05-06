// finding total number of copies sold of booking having rating more than 4.0
const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      ratings: [4.5, 4.7, 4.8, 5.0, 4.9],
      copiesSold: 150000
    },
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      ratings: [4.0, 3.9, 4.2, 4.1, 4.0],
      copiesSold: 80000
    },
    {
      title: "1984",
      author: "George Orwell",
      ratings: [4.6, 4.8, 4.7, 4.9, 4.8],
      copiesSold: 50000
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      ratings: [3.8, 3.7, 4.0, 3.9, 3.8],
      copiesSold: 120000
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      ratings: [4.9, 4.8, 5.0, 4.9, 4.8],
      copiesSold: 100000
    }
  ];

let avg_rating_more_than_4 = books.filter((book)=>{
    const total_rating = book.ratings.reduce((accumlator,rating)=> accumlator+rating,0)
    const avg_rating = total_rating/book.ratings.length
    return avg_rating>4
})

console.log(avg_rating_more_than_4)

avg_rating_more_than_4 = avg_rating_more_than_4.map((book)=>{
    const total_rating = book.ratings.reduce((accumlator,rating)=> accumlator+rating,0)
    const avg_rating = total_rating/book.ratings.length
    return ({title: book.title,
             author: book.author,
             average_rating: avg_rating.toFixed(1),
             copiesSold: book.copiesSold})}
            )

console.log(avg_rating_more_than_4)

avg_rating_more_than_4 = avg_rating_more_than_4.map((book)=>book.copiesSold).reduce((accumlator,sold)=> accumlator+sold,0)
console.log(avg_rating_more_than_4)



/* by chaining everything
let avg_rating_more_than_4 = books.filter((book)=>{
    const total_rating = book.ratings.reduce((accumlator,rating)=> accumlator+rating,0)
    const avg_rating = total_rating/book.ratings.length
    return avg_rating>4
}).map((book)=>{
    const total_rating = book.ratings.reduce((accumlator,rating)=> accumlator+rating,0)
    const avg_rating = total_rating/book.ratings.length
    return ({title: book.title,
             author: book.author,
             average_rating: avg_rating.toFixed(1),
             copiesSold: book.copiesSold})}
            ).map((book)=>book.copiesSold).reduce((accumlator,sold)=> accumlator+sold,0)

console.log(avg_rating_more_than_4)
*/

/*
// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

*/

/*
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
*/

/*
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
*/