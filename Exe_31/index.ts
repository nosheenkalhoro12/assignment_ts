// Exercise 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.  
//two step


//step 1

let user_names= ["admin","ali","fiza","nosheen","fatima"];

if (user_names.length === 0) { console.log( " we need to find some users!");          
} else {  for(let i  in user_names){ if( user_names[i] === "admin"){
        console.log(`Hello admin, would you like to see a status report?`);
             } else { console.log(`Hello ${user_names[i]}, thank you for logging in again.`); 
                 };
          };
       };

    



// Step 2  empty array


console.log ( "\n  for empty array of username: \n");

user_names = [];

if (user_names.length === 0) {
  console.log("We need to find some users!");
};
