// ** Boolean Coercion ** 

// Complete list of falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false (BigInt zero)
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Everything else is truthy!
console.log(Boolean('0'));       // true (non-empty string)
console.log(Boolean('false'));   // true (non-empty string)
console.log(Boolean([]));        // true (empty array is truthy)
console.log(Boolean({}));        // true (empty object is truthy)
console.log(Boolean(() => {}));  // true (functions are truthy)

// Logical Operators and Short-Circuit Evaluation

// || returns first truthy value (or last value)
console.log(null || undefined || 0 || 'hello' || 'world'); // 'hello'
console.log(0 || false || '');   // '' (all falsy, returns last)

// && returns first falsy value (or last value)
console.log('hello' && 123 && true && []); // [] (all truthy, returns last)
console.log('hello' && 0 && null); // 0 (first falsy)

// Practical uses
const port = process.env.PORT || 3000;
const user = isLoggedIn && getUserData();

// The nullish coalescing operator (??)
console.log(null ?? 'default');  // 'default'
console.log(undefined ?? 'default'); // 'default'
console.log(0 ?? 'default');     // 0 (differs from ||)
console.log('' ?? 'default');    // '' (differs from ||)


// Practical use

// Problem with || operator - treats falsy values as "missing"
const options = {
  volume: 0,
  debug: false
}

function initGame(options) {
  const volume = options.volume || 50;    // ❌ Bug: volume 0 becomes 50
  const debug = options.debug || true;    // ❌ Bug: false becomes true
}

// Solution with ??
function initGame1(options) {
  const volume = options.volume ?? 50;    // ✅ Only null/undefined trigger default
  const debug = options.debug ?? true;    // ✅ Respects false as valid choice
}