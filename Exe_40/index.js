"use strict";
//Exercise 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
//step 1 function
function make_album(artistName, title, tracks) {
    const album = {
        artistName,
        title,
        tracks,
    };
    return album;
}
;
//step 2
const album1 = make_album("Ali Zafar", "National Songs", 2);
const album2 = make_album("Saba", "Drama Title Songs", 6);
const album3 = make_album("Parveen", "Urdu Songs", 14);
// step 3 print
console.log(album1);
console.log(album2);
console.log(album3);
