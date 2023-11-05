"use strict";
/*  Exercise 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
// 1 Tests for equality and inequality with strings
let str_1 = "hello";
let str_2 = "Hello";
console.log(str_1 === str_2); //false
console.log(str_1 !== str_2); //true
// 2 Tests using the lower case function
let text_1 = "Hello World";
let text_2 = "hello world";
console.log(text_1.toLowerCase() === text_2); //true
// 3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 4;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 < num2); // false
console.log(num1 > num2); //true
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
// 4 Tests using "and" and "or" operators
let x = 6;
let y = 8;
let z = 13;
// && operator
console.log(x < y && y < z); // true, both
console.log(x > y && y < z); // false, if one is false whole become false
// || operator
console.log(x < y || y > z); // true , one true
console.log(x > y || y > z); // false , both false
// 5 Test whether an item is in a array
let fruits = ["apple", "mango", "grapes"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("banana")); // false
// 6 Test whether an item is not in a array
let stationary = ["pen", "paper", "books", "pencil", "marker"];
console.log(stationary.includes("story books")); //false
console.log(stationary.includes("drawing board")); //false
console.log(stationary.includes("books")); //true
