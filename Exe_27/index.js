"use strict";
//  Exercise 27
//  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien. 
Object.defineProperty(exports, "__esModule", { value: true });
//version 1
console.log("version 1");
let alien_color = "green";
if (alien_color === "green") {
    console.log("congratulation! you just  earned 5 points for shooting the alien.");
}
else if (alien_color === "yellow") {
    console.log("congratulation! you just  earned 10 points for shooting the alien.");
}
else if (alien_color === "red") {
    console.log("congratulation! you just  earned 15 points for shooting the alien.");
}
;
//version 2
console.log("version 2");
alien_color = "yellow";
if (alien_color === "green") {
    console.log("congratulation! you just  earned 5 points for shooting the alien.");
}
else if (alien_color === "yellow") {
    console.log("congratulation! you just  earned 10 points for shooting the alien.");
}
else if (alien_color === "red") {
    console.log("congratulation! you just  earned 15 points for shooting the alien.");
}
;
//version 3
console.log("version 3");
alien_color = "red";
if (alien_color === "green") {
    console.log("congratulation! you just  earned 5 points for shooting the alien.");
}
else if (alien_color === "yellow") {
    console.log("congratulation! you just  earned 10 points for shooting the alien.");
}
else if (alien_color === "red") {
    console.log("congratulation! you just  earned 15 points for shooting the alien.");
}
;
