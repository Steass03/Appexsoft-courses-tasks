function calc() {
  const a = document.getElementById("num_1").value;
  const b = document.getElementById("num_2").value;
  const operation = document.getElementById("math_oper").value;
  let result;
  if (operation === "+") result = parseInt(a) + parseInt(b);
  else if (operation === "-") result = a - b;
  else if (operation === "*") result = a * b;
  else if (operation === "/") result = a / b;

  document.getElementById("res").innerHTML = result;
}
