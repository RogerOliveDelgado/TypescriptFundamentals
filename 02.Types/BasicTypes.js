/**
 * TYPES
 */
//Primitives: string, number, boolean
//implicit
let person = "Julio";
let age = 23; //int or float
let willBeDeveloper = false;
willBeDeveloper = "true";
//Explicit
let person2;
let age2;
let willBeDeveloper2;
person2 = 12;
//Redundancy
let person3 = "Matias";
/**OTHER TYPES */
//Arrays
let arr;
let numbers;
let jobs;
numbers = [1, 2, 3, 4];
numbers = [1, 2, 3, "23"];
jobs = ["fullstack", "frontend", "QATester", "backend"];
//Any
//implicit
let country;
country = "Spain";
country = false;
//Explicit
let country2;
//Union Types
const a = 3;
//Objects
const obj = {
    name: "Roger",
    lastname: "Olive",
};
let obj2;
obj2 = {
    name: "Roger",
    lastname: "Olive",
};
