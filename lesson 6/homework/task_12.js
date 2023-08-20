const recepi = {
  name: "pie",
  ingredients: ["pepper", "apple", "eggs", "milk", "orange", "oil"],
  instruction: "Make it all together and get to the oven",
};

for (const key in recepi.ingredients) {
  document.write(
    "<p>Ingredient" +
      (parseInt(key) + 1) +
      ": " +
      recepi.ingredients[key] +
      "</p>"
  );
}
