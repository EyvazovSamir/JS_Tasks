// A: ehsen
let calculator = {
  read() {
    this.num1 = +prompt("enter number1: ");
    this.num2 = +prompt("enter number2: ");
  },
  sum() {
    return this.num1 + this.num2;
  },
  sub() {
    return this.num1 - this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
  div() {
    return this.num1 / this.num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mul());
console.log(calculator.div());

class Car {
  constructor(company, model, year, owner) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.owner = owner;
    this.gas = () => {
      console.log(`${owner} hit the gas on a ${year} ${company} ${model}`);
    };
    this.brake = () => {
      console.log(`${owner} hit the brakes on a ${year} ${company} ${model}`);
    };
  }
}
const toyota = new Car("BMW", "M8", 2023, "Samir");
const mercedes = new Car("Mercedes-Benz", "S-Class", 2022, "Ali");
const bmw = new Car("Toyota", "Camry", 2020, "Ruslan");
toyota.gas();
mercedes.gas();
bmw.brake();
