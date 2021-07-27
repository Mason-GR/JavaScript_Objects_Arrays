console.log("Hello World!\n==========\n");

// car example

// let car = {
//   type: "Ford",
//   model: "Mustang",
//   color: "Hotrod Red",
//   weight: "1500kg",
//   drive: function () {
//     return `The ${this.type} ${this.model} is now in drive!`;
//   },
// };

// console.log(`This car is a ${car.type} ${car.model}`);
// console.log(car.drive());

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = "The Time Machine by H.G. Wells";
book.pages = 84;
book.readCount = 2;
book.info = () => {
  return `My favorite book is ${book.title}, it has ${book.pages} pages, and I've read it ${book.readCount} times.`;
};

console.log(book.info());
