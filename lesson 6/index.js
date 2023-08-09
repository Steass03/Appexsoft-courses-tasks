// //
// (function () {
//   console.log("Server is running on port 3001");
// })();
// //function declaration
// function getDataFromApi() {
//   console.log("Server is running in port 3001");
// }
let n = 0;
// while (n < 10) {
//   console.log(n);
//   n++;
// }

// do {
//   console.log(n);
//   n += 1;
// } while (n < 10);

const fruits = ["Aple", "Bananas", "Oranges"];

// (fruits.length);

const object = {
  name: "Stas",
  age: 20,
  position: "Senior",
  perspective: true,
  Techstack: ["C++", "C#", "html/css", "php", "java script"],
  Hobbies: {
    swim: true,
    sleep: true,
    work: false,
  },
};
// for (const key in object) {
//   console.log(key);
// }
// for (const iterator of fruits) {
//   console.log(iterator);
// }

// const { name, age } = object;
// console.log(name, age);

// const value = object.age;
// const value1 = object["age"];
// console.log(value);
// console.log(value1);
// for (const key in object) {
//   const element = object[key];
//   console.log(element);
// }

// const student = ["Yan", "Rostik", 18, 100, true, "lifecoding"];

// const [name, age, year, lol, a, b, c] = student;
// console.log(name, age, year, lol, a, b, c);

// const data = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArray = [...data, 2, 2, 8];
// console.log(newArray);

// const restArray = [1, 2, 3, ...data];
// console.log(restArray);

// const obj = {
//   name: "Stas",
//   name1: "Vasya",
//   name2: "Roma",
//   name3: "Denis",
// };
//spread i rest operators
// const { name, ...rest } = obj;
// console.log(name);
// console.log(rest);

// const [value1, value2, ...allValues] = data;
// console.log(value1);
// console.log(value2);
// console.log(allValues);

const developer = "Developer";
// const it = "123";

// if (developer) {
//   console.log(developer);
// } else if (it) {
//   console.log("it's true");
// } else {
//   console.log("it's false");
// }

// const ternary = developer ? console.log(developer) : console.log("it's false");

switch (developer) {
  case "Developer":
    console.log("I am a developer");

  case "Frontend":
    console.log("I am a Frontend developer");
    break;
  default:
    console.log("Hello dude");
}
