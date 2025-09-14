// Creating negative zero
let negZero = -0;
console.log(negZero);           // -0 (may display as 0)
console.log(0 / -Infinity);     // -0

// The equality problem
console.log(-0 === 0);          // true
console.log(-0 == 0);           // true

// The coercion Problem
console.log(negZero.toString()); // '0' OOPS!!

// Object.is() vs === comparison
console.log(Object.is(NaN, NaN));    // true (differs from ===)
console.log(Object.is(-0, 0));       // false (differs from ===)
console.log(Object.is(0, 0));        // true (same as ===)

// How to actually detect -0
console.log(Object.is(-0, 0));  // false ✅
console.log(1 / -0);            // -Infinity
console.log(1 / 0);             // Infinity

// ** Quick Exercise **
// create a function that checks for negative zero and returns true if it is -0 or false if not.
// *do not use the build in Object.is.

// ✅ Solution: Practical function to check for -0
function isNegativeZero(value) {
  return value === 0 && (1 / value) === -Infinity;
}