"use strict";
//  Exercise 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
//Store the names of these animals in a list, 
let animals = ["cat", "dog", "horse"];
//use a for loop to print out the name of each animal.
for (let animal of animals) {
    console.log(animal);
}
;
//print a statement about each animal,
for (let animal of animals) {
    console.log(`\n A ${animal} would make a great pet.`);
}
;
//common characteristic
console.log("\n What these animals have in common?");
console.log("any of these animals would make a great pet!");
