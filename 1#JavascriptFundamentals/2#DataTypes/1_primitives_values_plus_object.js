// ** The Seven Primitive Types + Object **

// The complete type system
typeof undefined    // "undefined"
typeof null        // "object" (historical bug)
typeof true        // "boolean"
typeof 42          // "number"
typeof 42n         // "bigint"
typeof "hello"     // "string"
typeof Symbol()    // "symbol"
typeof {}          // "object"

// Edge Cases
typeof NaN         // "number" (Not-a-Number is a number!)
typeof [1,2,3]     // "object" (arrays are objects)
typeof function(){} // "function" (technically a callable object)

// Checking for null
let value = null;
console.log(value === null);        // ✅ Best way

// Checking for arrays
Array.isArray([1, 2, 3]);          // ✅ Reliable

// Checking for undefined
let x;
console.log(x === undefined);       // ✅ Works

// Never declared at all
console.log(notDeclared === undefined);        // ❌ ReferenceError!

// handles undeclared*
console.log(typeof x === 'undefined'); // ✅ Safer