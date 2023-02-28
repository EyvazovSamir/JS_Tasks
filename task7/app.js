// 1

const logGreeting = () => console.log("Samir is a JS developer");
logGreeting();

// 2

const isActive = (name) => console.log(`${name} is active now`);
isActive("Samir");
isActive("Ali");
isActive("Leyla");

// 3

const fourth = (number) => {
  console.log(number ** 4);
};
fourth(2);

// 4

for (i = 100; i < 1000; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
}

//  5
let cem = 0;

for (i = 10; i < 100; i++) {
  if (i % 2 === 1) {
    cem += i;
  }
}
console.log(cem);

// 6

let userNumber = +prompt("Enter number: ");
let sum = 0;

for (i = 100; i < 1000; i++) {
  if (i % userNumber === 0) {
    sum += i;
  }
}

console.log(sum);

// 7

const add = (eded1, eded2, callback) => {
  callback(eded1 + eded2);
};

add(3, 5, console.log);

// 8

const formal = (cins) => {
  if (cins === "M") {
    return (name) => console.log(`Cenab ${name}`);
  } else if (cins === "W") {
    return (name) => console.log(`Xanim ${name}`);
  }
};

const formalMan = formal("M");
formalMan("Samir");

const formalWoman = formal("W");
formalWoman("Leyla");
