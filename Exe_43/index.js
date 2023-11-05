"use strict";
// Exercise 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// step 1  Make a array of magician’s names
let magicianNames = ["Harry", "Jemi", "Peter", "Sam"];
// step 2 function which prints the name of each magician in the array.
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
    ;
}
;
//  Great to each magician’s name
function make_great(magicians) {
    let great_magician = magicians.map(magician => `the great ${magician}`);
    return great_magician;
}
;
//  modifies the array by adding the phrase the Great to each magician’s name
let great_magicianNames = make_great(magicianNames);
// call the function to show original array
console.log(" original Magicians");
showMagicians(magicianNames);
//  Call show_magicians() to see that the list has actually been modified.
console.log("\n Great Magician");
showMagicians(great_magicianNames);
