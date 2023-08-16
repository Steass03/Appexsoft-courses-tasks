let url = "https://jsonplaceholder.typicode.com/users/1";
async function AsyncgetData() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP-Error:" + response.statusText);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}
AsyncgetData();

function GetInfo1() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      // Handle the API response data here
      const information = data.results.map((info) => ({
        id: info.id,
        name: info.name,
        username: info.username,
        email: info.email,
        phone: info.phone,
        website: info.website,
      }));

      // Return the processed film information
      return information;
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
    });
}

// Call the function and work with the resolved promise
GetInfo1().then((information) => {
  console.log("Star Wars Films:", information);
});
