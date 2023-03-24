// Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.
// A: dogru
let array = [];
array.length = 5;
for (let i = 0; i < array.length; i++) {
  array[i] = +prompt("Enter number");
}

console.log(array);

// Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin.
// A: dogru
let array2 = [3, 5, 2, 12, 10];
function mulElems(array2) {
  let mul = 1;
  for (let i of array2) {
    mul *= i;
  }
  console.log(mul);
}
mulElems(array2);

// multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.
// A: dogru
function multiply(...array3) {
  let m = 1;
  for (let i of array3) {
    m *= i;
  }
  console.log(m);
}

multiply(3, 15, 5);
