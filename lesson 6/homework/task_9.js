const car = {
  name: "subaru",
  model: "legacy",
  model_year: 2008,
};
let = { name, model, model_year } = car;
document.getElementById(
  "car_info"
).innerHTML = `<p>Old info </p><p>Name:${name}</p><p>Model:${model}</p><p>Year:${model_year}</p>`;
model_year = 2009;
document.getElementById(
  "car_info"
).innerHTML += `<p>New info </p><p>Name:${name}</p><p>Model:${model}</p><p>Year:${model_year}</p>`;
