// task 1 sqrt
// A: done
let count = Number(prompt("Enter count: "));
let squareRoot = Math.sqrt(count); //
console.log(squareRoot);

// task2 fahrenheit
// A: done
let celsius = Number(prompt("Enter celsius: "));
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

// task3 > < = 0
// // A: done
let number = Number(prompt("Enter number: "));
if (number > 0) {
  console.log("number is positive");
} else if (number === 0) {
  console.log("number is 0");
} else if (number < 0) {
  console.log("number is negative");
} else {
  console.log("not a number");
}

// task4 even or odd
// A: done
let num = Number(prompt("Enter number: "));
if (num % 2 == 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

// task5 max number
// A: done
let eded1 = Number(prompt("Enter first number: "));
let eded2 = Number(prompt("Enter second number: "));
let eded3 = Number(prompt("Enter third number: "));
console.log(Math.max(eded1, eded2, eded3));

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let number3 = Number(prompt("Enter third number: "));

// A: else-e yazma. cunki, diger hallarda da ola biler, else-e daxil olsun.
// S: done!
// A: ela

if (number1 >= number2 && number1 >= number3) {
  console.log(number1);
} else if (number2 >= number1 && number2 >= number3) {
  console.log(number2);
} else if (number3 >= number1 && number3 >= number2) {
  console.log(number3);
}

// task6
// A: done
let n1 = Number(prompt("Enter first number: "));
let n2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");

if (operator === "+") {
  console.log(n1 + n2);
} else if (operator === "-") {
  console.log(n1 - n2);
} else {
  console.log("error");
}
// A: done
let nb1 = Number(prompt("Enter first number: "));
let nb2 = Number(prompt("Enter second number: "));
let operator1 = prompt("Enter operator: ");

switch (operator1) {
  case "+":
    console.log(nb1 + nb2);
    break;
  case "-":
    console.log(nb1 - nb2);
    break;
  default:
    console.log("error");
}
