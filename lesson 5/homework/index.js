// let num = 42;
// let firstName = "Vladilen";
// const isProgrammer = true;

//fitstName = "Max";
// isProgrammer = false; //error

/*// Can do
let $ = "test";
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 12;
let num_ = 12;
let first_name = "Elena"; //bad
let myNum = 34; //good
let num42 = 10;
Restricted
let 42num='11'
let my-num=1
let const
*/

//firstName = "Max";
//alert(firstName);
//console.log("Test", firstName);
// console.log(num + 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log(num - 10);
// console.log(num);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);

// let num3 = (num + 10 * 2) / (5 - 1);
// console.log(num3);

// const fullName = firstName + " " + "Minin";
// console.log(fullName);

//const resultElement = document.getElementById("result");
// resultElement.textContent = 42;
// console.log(resultElement);

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

console.log(input1.value);

console.log(typeof sum);
plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};

const submitBtn = document.getElementById("submit");
submitBtn.onclick = function () {
  if (action == "+") {
    console.log("hello click!");
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  } else if (action == "-") {
    console.log("hello click!");
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  }
};
