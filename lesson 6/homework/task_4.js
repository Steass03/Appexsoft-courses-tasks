function check_pas() {
  const password = document.getElementById("password").value;
  if (password === "секрет") {
    document.getElementById("result_check").innerHTML = "Вірно!";
  } else {
    document.getElementById("result_check").innerHTML = "Невірний пароль!";
  }
}
