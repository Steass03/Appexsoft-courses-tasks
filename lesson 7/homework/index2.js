// async function getInfo() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     data.forEach((item) => {
//       const { id, name, email } = item;
//       console.log(id, name, email);
//     });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// }
// getInfo();

// function Info_homework() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json(); // Parse the response body as JSON
//     })
//     .then((data) => {
//       data.forEach((user) => {
//         const { id, name, email } = user;
//         console.log(id, name, email);
//       });
//     })
//     .catch((error) => {
//       console.error("Fetch Error:", error);
//     });
// }
// Info_homework();
