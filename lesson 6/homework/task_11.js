const order = {
  number: 10,
  goods: ["banana", "apple", "pepper"],
  addres: "Lviv",
};

delete order.addres;
let { number, goods, addres } = order;
document.getElementById(
  "delete_info"
).innerHTML = `<p>New info  </p><p>Number : ${number}</p><p>Goods : ${goods}</p><p>Address: ${addres}</p>`;
