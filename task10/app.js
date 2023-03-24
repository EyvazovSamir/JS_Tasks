// repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!
// A: dogru
const repeatedSymbolCounter = (str, letter) => {
  count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
};
repeatedSymbolCounter("ALIONALI", "A");
console.log(count);

// capitalize(str) -> alion -=> Alion
// A: dogru
function capitalize(str) {
  console.log(str.replace(str[0], str[0].toUpperCase()));
}

capitalize("alion");

// to kebab-case
// A: dogru
function snakeToKebab(str) {
  console.log(str.toLowerCase().replaceAll("_", "-"));
}

snakeToKebab("BU_TEST_UCUNDUR");

// nameFormat(str) —> Alion GreenHeart-=> Alion G.
// A: daha yaxsi yaza bilersen, slice ile ( little bittle update 💹 )
function nameFormat(str) {
  let name = str.split(" ");
  return name[0] + " " + name[1][0] + ".";
}

console.log(nameFormat("Alion GreenHeart"));

// trim

// let ad = prompt("ad: ");
// console.log(ad.trim());

// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// A: dogru
function changeFirstLetter(word, firstLetter) {
  console.log(word.replace(word[0], firstLetter));
}
changeFirstLetter("alion", "A"); // Alion

// split

function splitMeth(str) {
  return str.split(" ");
}

console.log(splitMeth("I am JS-developer"));

// removeCharacterFromString("Alion","A") -> "lion" .
// A: dogru
function removeCharacterFromString(name, letter) {
  console.log(name.replaceAll(letter, ""));
}

removeCharacterFromString("Alion", "A");

// verify gmail address.
// A: dogru
function verifyGmail(address) {
  if (address.length >= 15 && address.endsWith("@gmail.com")) {
    console.log(`Your email address is ${address}`);
  } else {
    console.log(`Wrong email address. Minimum 5 symbols`);
  }
}
verifyGmail(prompt("Enter your email address: "));

// // school func

let date = new Date();
// A: dogru
function schoolday() {
  if (date.getDay() >= 1 && date.getDay() <= 5) {
    alert("You have to go to school 😔");
  } else alert("You don't have to go to school 🙂");
}
schoolday();

// document day
let today = new Date();
document.write(today);
document.write("<br/>");

// document day of the week

const week = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
// A: dogru
let dayOfTheWeek = new Date();
document.write(week[dayOfTheWeek.getDay()]);
document.write("<br/>");

// document month

const month = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
// A: dogru
let monthNow = new Date();
document.write(month[monthNow.getMonth()]);
document.write("<br/>");

// left to live 😢
// A: dogru
let yourAge = +prompt("Enter your age: ");
const ezrail = (yourAge) => {
  return 77 - yourAge;
};
let years = ezrail(yourAge);
alert(`You have ${years} years to live 😦`);

//  how many years, months, days, hours, minutes, seconds have passed
// A: elasan
function time() {
  let date = Date.now();
  let birthDate = new Date(prompt("Enter your birth day: "));
  let ms = date - birthDate.getTime();
  let sec = parseInt(ms / 1000);
  let min = parseInt(sec / 60);
  let hours = parseInt(min / 60);
  let day = parseInt(hours / 24);
  let month = parseInt(day / 30);
  let year = parseInt(month / 12);
  console.log(`${ms} ms`);
  console.log(`${sec} sec`);
  console.log(`${min} min`);
  console.log(`${hours} hours`);
  console.log(`${day} day`);
  console.log(`${month} month`);
  console.log(`${year} year`);
}

time();
