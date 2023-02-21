// user tip task

let userTip = prompt("Siz kimsiz?");

switch (userTip) {
  case "user":
    console.log("xos geldin istifadeci");
    break;
  case "admin":
    console.log("xos geldin cenab admin");
    break;
  case "guest":
    console.log("xos geldin qonaq");
    break;
  default:
    console.log("sizin tipinizi bilmirem");
}

// fizzbuzz task

let num = prompt("enter number: ");

if (num % 15 === 0) {
  console.log("fizzbuzz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else {
  console.log("error");
}

// 2 reqem task

let eded = Number(prompt("Enter eded: "));

if ((eded >= 10 && eded < 100) || (eded <= -10 && eded > -100)) {
  console.log("eded iki reqemlidir");
} else {
  console.log("error");
}

// 2ye ve 5e bolunen eded task

let ed = Number(prompt("Enter eded: "));

if (ed % 2 === 0 && ed % 5 === 0) {
  console.log("bu istediyim ededdir");
} else {
  console.log("error");
}

// cemi 100den cox task

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let number3 = Number(prompt("Enter third number: "));

let sum = number1 + number2 + number3;

if (sum >= 100) {
  console.log("cemleri kecdi 100u");
} else {
  console.log("100den azdi");
}
