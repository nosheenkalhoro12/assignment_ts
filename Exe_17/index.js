"use strict";
// Exercise 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Object.defineProperty(exports, "__esModule", { value: true });
//step 01
let guest_Names = ["Tahreen", "Ali", "Nosheen", "Ahmed", "Noor", "Fiza", "Wasif", "suggand"];
//   index                   0       1         2       3        4      5       6         7
//length                     1       2         3       4        5      6       7         8   
//console.log(guest_Names)
console.log(" I can invited only two people for dinner");
//step 02
// remove 6 guest from list
while (guest_Names.length > 2) // 2 indicate length of array not index
 {
    let removeguest = guest_Names.pop();
    console.log(`sorry, ${removeguest} \n We have cancel the dinner. So, we can't invited you `);
}
;
//step 3
//conform  invitation message for 2 guset
for (let guest of guest_Names) {
    console.log(`Hello, ${guest} \n You are still invited for dinner.`);
}
;
//step 4
//remove remaining guest from list
guest_Names.pop();
guest_Names.pop();
//print empty list
console.log(`Guest list after dinner`, guest_Names);
