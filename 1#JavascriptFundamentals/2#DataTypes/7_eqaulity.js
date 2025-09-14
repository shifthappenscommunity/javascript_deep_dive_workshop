// ** Equality **

// Strict equality (===) - no coercion
console.log(5 === 5);           // true
console.log(5 === '5');         // false
console.log(null === undefined); // false
console.log(NaN === NaN);       // false 😮

// Loose equality (==) - with coercion
console.log(5 == '5');          // true (coercion)
console.log(0 == false);        // true
console.log('' == false);       // true
console.log(null == undefined); // true 😮
console.log(NaN == NaN);        // false (still!)

// The equality table surprises
console.log(null == 0);         // false (special case)
console.log(undefined == 0);    // false (special case)
console.log(null == false);     // false
console.log(undefined == false); // false

// But these work due to coercion chains
console.log('0' == false);      // true (both → 0)
console.log([] == false);       // true ([] → '' → 0, false → 0)
console.log([''] == false);     // true
console.log([0] == false);      // true

// The transitivity problem
let a = '0', b = 0, c = false;
console.log(a == b);            // true
console.log(b == c);            // true
console.log(a == c);            // true (transitivity holds here)

// But not always...
let x = null, y = undefined, z = 0;
console.log(x == y);            // true
console.log(y == z);            // false
console.log(x == z);            // false (transitivity broken!)

// Best Practices and Gotchas

// When to use which equality
function compareValues(a, b) {
  // Use === for most comparisons
  if (a === b) return 'strictly equal';
  
  // Use == only for null/undefined check
  if (a == null) return 'a is null or undefined';
  
  // Use Object.is() for special cases
  if (Object.is(a, b)) return 'same value (handles NaN and -0)';
  
  return 'not equal';
}

// Common pitfall: array/object equality
console.log([1, 2] === [1, 2]); // false (different references)
console.log({a: 1} === {a: 1}); // false (different references)

// Deep equality requires custom logic
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b); // Simple but flawed
}