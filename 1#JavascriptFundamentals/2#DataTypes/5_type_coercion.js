// ** Type Coercion **

// String Coercion
console.log('5' + 3);           // '53' (number → string)
console.log('5' + 3 + 2);       // '532'
console.log(5 + 3 + '2');       // '82' (math first, then concatenation)
console.log('5' - 3);           // 2 (string → number)
console.log('5' * '3');         // 15 (both → number)
console.log('5' / '2');         // 2.5

// Edge cases
console.log('5' - '2');         // 3
console.log('hello' - 1);       // NaN
console.log(true + '1');        // 'true1'
console.log(true + 1);          // 2

// Number Coercion
console.log(Number('123'));      // 123
console.log(Number(''));         // 0 😮
console.log(Number(' '));        // 0 (whitespace → 0)
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0 😮
console.log(Number(undefined));  // NaN

// Implicit coercion with unary +
console.log(+'123');            // 123
console.log(+true);             // 1
console.log(+false);            // 0
console.log(+null);             // 0
console.log(+undefined);        // NaN
console.log(+{});               // NaN
console.log(+[]);               // 0 😮
console.log(+[1]);              // 1 😮
console.log(+[1, 2]);           // NaN

// Objects convert via valueOf() and toString()
const obj = {
  valueOf() { return 42; },
  toString() { return 'hello'; }
};

console.log(obj + 1);           // 43 (uses valueOf)
console.log(`${obj}`);          // 'hello' (uses toString)
console.log(String(obj));       // 'hello'

// Arrays have special behavior
console.log([1, 2, 3] + 4);     // '1,2,34'
console.log([1] + [2]);         // '12'
console.log([] + {});           // '[object Object]'

// The infamous example
console.log([] == ![]);         // true 🤯
// Step by step:
// ![] → false (array is truthy, negation makes it false)
// [] == false → [] == 0 → "" == 0 → 0 == 0 → true