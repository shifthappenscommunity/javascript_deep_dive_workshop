// ** Primitive vs Reference Types **

// Primitives are copied by value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (unchanged)

// Objects are copied by reference
let obj1 = { value: 5 };
let obj2 = obj1;
obj2.value = 10;
console.log(obj1.value); // 10 (changed!)

// The string edge case
let str = "hello";
str[0] = "H"; // Doesn't work - strings are immutable
console.log(str); // "hello"

// ✅ Solution 1: Create a new string with concatenation
let str1 = "hello";
str1 = "H" + str1.slice(1);
console.log(str1); // "Hello"