// task1 random number
// A: ela
let randomNumber = Math.floor(Math.random() * 100 + 1);
let count = 1;
let userNumber = +prompt("Number?");
while (userNumber !== randomNumber) {
  count++;
  if (userNumber > randomNumber) {
    userNumber = +prompt("less");
  } else {
    userNumber = +prompt("more");
  }
}
console.log(
  `Well done, you guessed the number ${userNumber} in ${count} attempts`
);

if (count === 1) {
  console.log("transfer 1000$ to his bank account");
} else if (count > 1 && count <= 5) {
  console.log("transfer 750$ to his bank account");
} else if (count > 5 && count <= 9) {
  console.log("transfer 250$ to his bank account");
} else if (count >= 10) {
  console.log("transfer 250$ to my bank account");
}

// task2 sum 1 to number
// Super
let number = +prompt("Enter number: ");
let sum = 0;

for (i = 1; i <= number; i++) {
  sum += i;
}
console.log(`${sum}`);

// task3 ****
// mohtesem
for (let j = 3; j >= 0; j--) {
  for (let i = 0; i <= j; i++) {
    document.write("*");
  }
  document.write("<br/>");
}

// task4 * 1 to number
// ela
let num = +prompt("Enter number: ");
let mul = 1;

for (i = 1; i <= num; i++) {
  mul *= i;
}
console.log(`factorial is ${mul}`);
