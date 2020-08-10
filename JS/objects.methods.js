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

// =============================================
Object.defineProperties(obj, props);

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// expected output: 42

// =============================================

Object.freeze();

const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

// =============================================

Object.getOwnPropertyNames();

const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

// =============================================

obj.hasOwnProperty(prop);

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// expected output: true

console.log(object1.hasOwnProperty("toString"));
// expected output: false
