/**
 * TYPES
 */

//Primitives: string, number, boolean

//implicit
let person = "Julio";
let age = 23.89; //int or float
let willBeDeveloper = false;

willBeDeveloper = "true";

//Explicit
let person2: string;
let age2: number;
let willBeDeveloper2: boolean;

person2 = 12;

//Redundancy
let person3: string = "Matias";

/**OTHER TYPES */

//Arrays
let arr: [{number:number}];
let numbers: number[];
let jobs: Array<string>;

arr = [{number: '23'}]
numbers = [1, 2, 3, 4, '78'];
numbers = [1, 2, 3, "23"];
jobs = ["fullstack", "frontend", "QATester", "backend"];

//Any

//implicit
let country;

country = "Spain";
country = false;

//Explicit
let country2: any;

//Union Types
const a: string | number = '';

//Objects
const obj: { name: string; lastname: string } = {
  name: "Roger",
  lastname: "Olive",
};

let obj2: {
  name: string;
  lastname: string;
};
obj2 = {
  name: "Roger",
  lastname: "Olive",
};

