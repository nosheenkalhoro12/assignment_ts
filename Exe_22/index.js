"use strict";
//Exercise 22
Object.defineProperty(exports, "__esModule", { value: true });
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//create an array
let friends = ["Ali", "Asif", "faraz", "kashif"];
// index no:   0      1      2       3
// length      1      2      3       4
console.log(friends[4]); //   undefine     //Intentional Error by try to print index 4 
console.log(friends.length); //4            // correction of error total length is 4
