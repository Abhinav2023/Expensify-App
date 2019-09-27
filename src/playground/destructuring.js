// const person={
//     age: 18,
//     nationality: "Indian",
//     location:{
//         temp: 10,
//         city: "Allahabad"
//     }
// };
// const {name: firstName="Bansal", age}=person;

// console.log(`${firstName} is living in ${age}`);

const book={
    title: "Ego is enemy :)",
    author: "Ryan Holiday",
    publisher:{
        name: "Penguin"
    }
};

const {title,author}=book;
const {name}=book.publisher;

console.log(`${title} is written by ${author} and published by ${name}.`)