// Nearly all stuctures in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype

// =============================================

Object.assign();
// Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }

// target
// The target object — what to apply the sources’ properties to, which is returned after it is modified.
// sources
// The source object(s) — objects containing the properties you want to apply.

// return the target object.

// =============================================

Object.entries(obj);

const object1 = {
  a: "somestring",
  b: 42,
};

Object.entries(object1);
// expected output:
// [
//    ["a", "somestring"],
//    ["b", 42],
// ]

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

// =============================================

Object.keys(obj);

// basic usage
const obj = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(obj)); //  Array ["a", "b", "c"], returns an array of strings

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

// expected output:
// "a": "somestring"
// "b": "42"
// "c": false

// =============================================

Object.values();

// usage

const obj = {
  a: "somestring",
  b: 42,
  c: false,
};

Object.values(obj); //   returns array ["somestring", 42, false]
