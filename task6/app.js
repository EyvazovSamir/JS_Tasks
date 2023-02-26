function getNumbers() {
  return +prompt("enter number: ");
}

function pow() {
  return number1 ** number2;
}

function add() {
  return number1 + number2;
}

function subtract() {
  return number1 - number2;
}

function multiply() {
  return number1 * number2;
}

function divide() {
  return number1 / number2;
}

function showAnswer(func) {
  console.log(`Answer is ${func}`);
}

let number1 = getNumbers();
let number2 = getNumbers();
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
