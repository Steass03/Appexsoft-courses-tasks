// function Data(data, callback) {
//   if (data) {
//     const result = callback(data);
//     return result;
//   } else {
//     return "No data try again";
//   }
// }
// function stringLength(str) {
//   return str.length;
// }

// const input = "I am currently learning javascript";

// const length = Data(input, stringLength);
// console.log("String, length", length);

const numbers = [1, 2, 36, 111, 4484, 4845, 4844, 454584, 0];

// const double_numbers = numbers.map((num) => num * 2);
// const evetNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(double_numbers);
// console.log(evetNumbers);
// const new_Numbers = numbers.filter((num) => num > 50);
// console.log(new_Numbers);

// numbers.forEach((item, index) => {
//   if (item > 50) {
//     item = item - index;
//   }
//   if (item < 200) {
//     item = item - index;
//   }
// });

// const reduceMethod = numbers.reduce(
//   (acc, currentValues) => acc + currentValues,
//   0
// );

// console.log(reduceMethod);

// const sortMethod = numbers.sort(function (a, b) {
//   return a - b;
// });
//console.log(sortMethod);

// const findScoreWith646 = numbers.find((item) => item === 111);
// console.log(findScoreWith646);

// async function getData() {
//   let url = "https://swapi.dev/api/films/";
//   try {
//     const response = await fetch(url);
//     const data = response.json();

//     console.log(data);
//   } catch (error) {
//     console.warn(error);
//   }
// }
// getData();
// let url = "https://swapi.dev/api/films/";
// async function AsyncgetData() {
//   fetch(url).then((response) => {});
//   console.log(data);
// }
// console.log(data);

// let url = "https://swapi.dev/api/films/";
// async function AsyncgetData() {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP-Error:" + response.statusText);
//       }
//       return response.json();
//     })
//     .catch((error) => console.log(error));
// }
// AsyncgetData();
function fetchStarWarsFilms() {
  const apiUrl = "https://swapi.dev/api/films/";

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      // Handle the API response data here
      const films = data.resultsa.map((film) => ({
        title: film.title,
        director: film.director,
        releaseDate: film.release_date,
      }));

      // Return the processed film information
      return films;
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
}

// Call the function and work with the resolved promise
fetchStarWarsFilms().then((films) => {
  console.log("Star Wars Films:", films);
});
