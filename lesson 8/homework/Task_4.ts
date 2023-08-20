interface Order {
  productName: string;
  count: number;
  pricePerOne: number;
}

const CheckOrder = (order: Order): string => {
  return order.count > 0 && order.pricePerOne
    ? "All is good"
    : "Bad , insert correct data";
};

const GoodOrder: Order = {
  productName: "Fish",
  count: 10,
  pricePerOne: 1000,
};
const BadOrder: Order = {
  productName: "Potato",
  count: 0,
  pricePerOne: 10,
};
console.log(CheckOrder(GoodOrder));
console.log(CheckOrder(BadOrder));
