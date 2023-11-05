"use strict";
// Exercise 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "nOsHeEn";
let lastName = "kAlHoRo";
let fullName = firstName + " " + lastName;
//console.log(fullName);
//case 1) LowerCase
let case1 = fullName.toLowerCase();
console.log(case1);
// case 2) UpperCase
let case2 = fullName.toUpperCase();
console.log(case2);
// case 3 titlecase
function titleCase(fullName) {
    let case3 = fullName.toLowerCase().split(" ");
    for (let i = 0; i < case3.length; i++) {
        case3[i] = case3[i][0].toUpperCase() + case3[i].slice(1);
    }
    console.log(case3.join(" "));
    return case3;
}
;
titleCase(fullName);
