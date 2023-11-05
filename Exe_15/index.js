"use strict";
// Exercise 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program starting the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list. 
Object.defineProperty(exports, "__esModule", { value: true });
//Step 1
let guestNames = ["Ali", "Nosheen", "Ahmed", "Fiza", "Kehkashan", "suggand"];
//                           0        1         2       3        4           5
// person not coming
let guestNotComing1 = "kehkashan";
console.log(` ${guestNotComing1},can't make the dinner.`);
//step2 replace guest
// new guest is  wasif
guestNames.splice(4, 1, "wasif");
console.log(guestNames);
//step3 Print a second set of invitation 
for (let guestName of guestNames) {
    console.log(`Dear ${guestName}, \n You are invited for dinner on saturday please join us. \n Thank you`);
}
;
