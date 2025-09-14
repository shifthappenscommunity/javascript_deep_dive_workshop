// ** Creating and Identifying NaN **

// Ways to get NaN
console.log(0 / 0);              // NaN
console.log(Math.sqrt(-1));      // NaN
console.log(parseInt("hello"));   // NaN
console.log(Number("xyz"));       // NaN
console.log(undefined + 1);       // NaN

// The NaN paradox
console.log(NaN === NaN);        // false
console.log(NaN == NaN);         // false

// NaN checking (but be careful...)
console.log(isNaN(NaN));         // true (but be careful...)
console.log(Number.isNaN(NaN));  // ✅ true

// The problem with global isNaN
console.log(isNaN("hello"));        // true (coerces to NaN)
console.log(isNaN(undefined));      // true (coerces to NaN)
console.log(isNaN({}));            // true (coerces to NaN)

// Number.isNaN is stricter
console.log(Number.isNaN("hello")); // false (not a number type)
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(NaN));     // true


// ** Quick Exercise **
// Create a polyfill that checks if NaN is Really NaN *do not use the build in methods.

// ✅ Solution
function isReallyNaN(value) {
  return value !== value; // Only NaN is not equal to itself
}