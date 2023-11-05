//Exercise 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// array from  Exercise 11

let names:string[] = ["fiza","Ali","nosheen","noor","ayet"];
//                      0      1       2        3      4

//for loop used for printing message to each
for( let name of names) {  
    console.log (`Hello ${name}, I hope you are doing great job.`);

};