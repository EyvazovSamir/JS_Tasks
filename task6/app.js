// A: sadece mohtesem, amma 1-2 problem var, onlari qeyd edirem.

function getNumbers() {
  return +prompt("enter number: ");
}

function pow(number1, number2) {
  return number1 ** number2;
}

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function showAnswer(func) {
  console.log(`Answer is ${func}`);
}

let number1 = getNumbers();
let number2 = getNumbers();
// A: asagidaki funksiyalar argument almir, amma biz vermishik. Yuxarida paramterleri qeyd et z/o
// A: dogru
let power = pow(number1, number2);
let sum = add(number1, number2);
let sub = subtract(number1, number2);
let mul = multiply(number1, number2);
let div = divide(number1, number2);
showAnswer(power);
showAnswer(sum);
showAnswer(sub);
showAnswer(mul);
showAnswer(div);
