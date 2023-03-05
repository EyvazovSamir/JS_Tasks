// 1

function prop2Taker(obj) {
  console.log(obj["prop-2"]);
}

prop2Taker({ one: 1, "prop-2": 2 }); // 2
prop2Taker({ "prop-2": "two", prop: "test" }); // 'two'

// 2

function propertyTaker(obj1, propertyName) {
  console.log(obj1[propertyName]);
}

propertyTaker({ continent: "Asia", country: "Japan" }, "continent"); // 'Asia'
propertyTaker({ country: "Sweden", continent: "Europe" }, "country"); // 'Sweden'
propertyTaker({ name: "ali", age: 12 }, "name"); // 'ali'

// 3

function existsAndTruthy(obj2, propertyName2) {
  if (obj2[propertyName2]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

existsAndTruthy({ a: 1, b: 2, c: 3 }, "b"); // true
existsAndTruthy({ x: "a", y: null, z: "c" }, "y"); // false
existsAndTruthy({ x: "a", b: "b", z: undefined }, "z"); // false
