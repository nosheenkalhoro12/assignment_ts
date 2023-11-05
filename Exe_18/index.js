"use strict";
//  Exercise 18
//   Seeing the World: Think of at least five places in the world you’d like to visit.
// 1• Store the locations in a array. Make sure the array is not in alphabetical order.
// 2• Print your array in its original order.
// 3• Print your array in alphabetical order without modifying the actual list.
// 4• Show that your array is still in its original order by printing it.
// 5• Print your array in reverse alphabetical order without changing the order of the original list.
// 6• Show that your array is still in its original order by printing it again.
// 7• Reverse the order of your list. Print the array to show that its order has changed.
// 8• Reverse the order of your list again. Print the list to show it’s back to its original order.
// 9• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// 10• Sort to change your array so it’s stored in reverse alphabetical order. Print the 
// list to show that its order has changed. 
Object.defineProperty(exports, "__esModule", { value: true });
//step 1
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let destination = ["skardu", "gigit", "makka", "madina", "sawat"];
//step 2
// • Print your array in its original order.
console.log("original array");
console.log(destination); // original array
//step 3
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order without modifying the actual list by sort");
console.log([...destination].sort()); //alphabetical order without modifying the actual list
//step 4
// • Show that your array is still in its original order by printing it.
console.log("still in its original order by printing it");
console.log(destination); //still in its original order by printing it
//step 5
// • Reverse the order of your list. Print the array to show that its order has changed.
//console.log([...destination].reverse());  //reverse original list
console.log("reverse order of your list");
console.log([...destination].sort().reverse()); //reverse order of your list follow by step 4
//step 6
//Show that your array is still in its original order by printing it again.
console.log("still in its original order");
console.log(destination); //still in its original order by printing it
//step 7
//Reverse the order of your list. Print the array to show that its order has changed.
//console.log(destination.reverse())
console.log("order has changed");
let rev = destination.reverse(); // original list reverse
console.log(rev);
//step 8
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("order has changed to back to original");
let rev2 = destination.reverse(); // original list reverse
console.log(rev2);
//step 9
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(" order change");
let soort = destination.sort(); // original list sort acc: to alphabet
console.log(soort);
//step 10
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("stored in alphabetical order");
let sooort1 = destination.reverse().sort(); // original list sort acc: to alphabet
console.log(sooort1);
