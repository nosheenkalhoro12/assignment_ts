"use strict";
//  Exercise 26
//  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block. 
Object.defineProperty(exports, "__esModule", { value: true });
//version 1 ( if block code run)
console.log("version 1");
let alien_color = "blue";
if (alien_color == "blue") {
    console.log("congratulation! you just  earned 5 points for shooting the alien.");
}
else {
    console.log("congratulation! you just  earned 10 points for shooting the alien.");
}
;
//version 2 ( else block code run)
console.log("version 2");
alien_color = "red";
if (alien_color == "blue") {
    console.log("congratulation! you just  earned 5 points for shooting the alien.");
}
else {
    console.log("congratulation! you just  earned 10 points for shooting the alien.");
}
;
