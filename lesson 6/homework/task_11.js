const order = {
  number: 10,
  goods: ["banana", "apple", "pepper"],
  addres: "Lviv",
};

const { addres, ...remainingOrder } = order;
console.log("Original: ", order);
console.log("COPY : ", remainingOrder);
