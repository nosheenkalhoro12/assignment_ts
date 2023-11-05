//Exercise 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//creates Objects

const fruit1 = {
    
    type:     "fruit",
    name:     "apple",
    message:  "what is price of 5 kg apples? if 1 kg apple is 250 rupees",
        
};

const fruit2 = {
    
    type:     "fruit",
    name:     "Mango",
    message:  "what is price of 5 kg apples? if 1 kg apple is 375 rupees",
        
};
const fruit3 = {
    
    type:     "fruit",
    name:     "grapes",
    message:  "what is price of 5 kg apples? if 1 kg apple is 255 rupees",
        
};

// create empty array 

let fruits:unknown[] = [];

// whole objects push in fruits array

fruits.push(fruit1, fruit2,fruit3);


// print objects in array

console.log(fruits); 
