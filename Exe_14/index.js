"use strict";
// Exercise 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Ali", "Nosheen", "Ahmed", "Fiza", "Kehkashan", "suggand"];
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},\n You are invited for dinner on saturday please join us.`);
});
