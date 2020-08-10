// Nearly all stuctures in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype


/*
  Object.assign()
*/ 

Object.assign()
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




