// ** The Temporal Dead Zone (TDZ) **

// ❌ ReferenceError: Cannot access 'myLet' before initialization
console.log(myLet); 
let myLet = 5;

// ❌ ReferenceError: Cannot access 'myConst' before initialization
console.log(myConst);
const myConst = 5;

// ✅ undefined (hoisted but not initialized)
console.log(myVar);
var myVar = 5;


// ** block scope vs function scope **

// The Classic Loop Problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 100); // Prints: 3, 3, 3
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 100); // Prints: 0, 1, 2
}

// Edge Case: const in loops
for (const k of [1, 2, 3]) {
  console.log(k); // Works! New binding for each iteration
}

// ❌ This won't work
for (const m = 0; m < 3; m++) { // Error: Assignment to constant variable
  console.log(m);
}