const Person_1 = {
  name: "Petro",
  age: 20,
  hobby: "swimming",
};
const Person_2 = {
  name: "Stas",
  age: 20,
  hobby: "riding bicycle",
};

const Check_Equal = JSON.stringify(Person_1) === JSON.stringify(Person_2);
document.write("Воно рівні : " + Check_Equal + "\n");
