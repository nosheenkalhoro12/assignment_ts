"use strict";
// Exercise 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
//step 3  Great to each magician’s name
function make_great(magicians) {
    let great_magician = magicians.map(magician => `the great ${magician}`);
    return great_magician;
}
;
// step 4  modifies the array by adding the phrase the Great to each magician’s name
let great_magicianNames = make_great(magicianNames);
// step 5 Call show_magicians() to see that the list has actually been modified.
console.log("\n Great Magician");
showMagicians(great_magicianNames);
