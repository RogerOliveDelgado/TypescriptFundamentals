//ANY
/**
 * Allows redeclaration
 *
 * Do not block non desired types
 *
 * Loose all benefits of TypeScript
 *
 */
const book = {
    author: "Author name",
    year: 2018
};
console.log(book.title);
//
let pais = 'Perú';
country = 1;
//
function sum(a, b) {
    return a + b;
}
//UNKNOWN
/**
 * Do not allow inconsistent data propagation
 */
let x = 10;
let v1 = x;
/**
 * Do not allow to do operations until we define a type
 */
function sum(a, b) {
    // comprobando el tipo
    if (typeof a === "number") {
        return a + b;
    }
    throw new Error(`La variable '${a}' no es un número`);
}
sum(10, 2); // 12
// Error
sum("hola", 2); // La variable 'hola' no es un número
sum({ a: 5 }, 2); // La variable [object Object] no es un número
