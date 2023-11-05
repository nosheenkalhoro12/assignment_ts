"use strict";
//Exercise 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
let fav_fruit = ["mango", "grapes", "orange"];
if (fav_fruit.includes("mango")) {
    console.log("I really like mangoes.");
}
;
if (fav_fruit.includes("apple")) {
    console.log("I like apples.");
}
;
if (fav_fruit.includes("grapes")) {
    console.log("I like grapes.");
}
;
if (fav_fruit.includes("orange")) {
    console.log("I really like orange.");
}
;
if (fav_fruit.includes("cherry")) {
    console.log("I like cherry.");
}
;
