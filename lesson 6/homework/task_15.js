let Salami = {
  size: "big",
  inside: ["Салямі", "тісто", "сир", "томати", "м'ясо"],
  price: 1000,
};
let Chiese4 = {
  size: "big",
  inside: ["Сир", "Сир", "Сир", "Сир", "Томати", "Тісто", "Оливки"],
  price: 10000,
};

let Pizza = { ...Salami, ...Chiese4 };
console.log(Pizza);
