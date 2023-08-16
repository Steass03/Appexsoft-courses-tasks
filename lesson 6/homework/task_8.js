const object_1 = {
  name: "iphone",
  price: 1000,
  category: "phone",
};
const object_2 = {
  name: "samsung",
  price: 800,
  category: "celphone",
};
let object_both = { ...object_1, ...object_2 };

document.getElementById(
  "task_8"
).innerHTML = `<p>Name : ${object_both.name}</p><p>price : ${object_both.price}</p><p>Category : ${object_both.category}</p>`;
