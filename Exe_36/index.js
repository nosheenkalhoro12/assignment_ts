"use strict";
//  Exercise 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
//function
function make_shirt(size, message) {
    console.log(`Size:${size},\n Message: ${message}`);
    return;
}
;
// call for function
let size = "medium";
let message = ' "Typescript is super set of Javascript" ';
make_shirt(size, message);
