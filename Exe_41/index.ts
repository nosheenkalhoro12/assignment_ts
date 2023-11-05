// Exercise 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



// step 1  Make a array of magician’s names

let magicianNames = ["Furkan", "Jemi", "Peter","Sam"];


// step 2 function which prints the name of each magician in the array.

function show_magicians() {
    for (let  magician of magicianNames) {console.log (`${ magician}`);
    };
};

show_magicians();