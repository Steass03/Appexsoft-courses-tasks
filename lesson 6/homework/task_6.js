function check_num() {
  let num = document.getElementById("entered_num").value;
  if (num < 0) {
    document.getElementById("Result_check").innerHTML = "smaller than 0";
  } else if (num === 0) {
    document.getElementById("Result_check").innerHTML = "same as 0";
  } else if (num > 0) {
    document.getElementById("Result_check").innerHTML = "grater than 0";
  }
}
