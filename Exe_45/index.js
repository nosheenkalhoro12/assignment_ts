"use strict";
// Exercise 45
//  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
//function that stores information about a car in a Object
function car_create(manufacturer, model, ...properties) {
    let car = {
        manufacturer,
        model,
    };
    for (let [key, value] of properties) {
        car[key] = value;
    }
    ;
    return car;
}
;
let myCar = car_create("toyota", "corolla", ["colour", "red"], ["OptionalFeature", "sunroof"]);
//Print the Object 
console.log(myCar);
