"use strict";
// Exercise 
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
Object.defineProperty(exports, "__esModule", { value: true });
//step one 
let guestNames2 = ["Ali", "Nosheen", "Ahmed", "Fiza", "Wasif", "suggand"];
//                          0        1        2       3        4           5
for (let guestName of guestNames2) {
    console.log(`Dear ${guestName}, \n  You are invited for dinner and I, found a bigger dinner table on saturday. So, please join us. \n  Thank you`);
}
;
//step two (add new guest in start)
guestNames2.unshift("Tahreen");
console.log(guestNames2);
//step 3 add new guest in middle
guestNames2.splice(4, 0, "Noor");
console.log(guestNames2);
// append joint to next 
//guestNames2.append() //not done
for (let guestName of guestNames2) {
    console.log(`Dear ${guestName}, \n You are invited for dinner and I, found a bigger dinner table on saturday. So, please join us. \n Thank you`);
}
;
