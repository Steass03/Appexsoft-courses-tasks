// async function getInfo() {
//   let url = "https://jsonplaceholder.typicode.com/users/1";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     const { id, name, username, email, phone, website } = data;
//     console.log(id, name, username, email, phone, website);
//   } catch (error) {
//     console.warn(error);
//   }
// }
// getInfo();

// function getUser() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((user) => {
//       const { id, name, username, email, phone, website } = user;
//       console.log(
//         ` User \nId: ${id}, \nName: ${name}, \nUsername: ${username}, \nEmail: ${email}, \nPhone: ${phone}, \nWebsite: ${website}`
//       );
//     })
//     .catch((error) => {
//       console.error("Error fetching user:", error);
//     });
// }

// getUser();
