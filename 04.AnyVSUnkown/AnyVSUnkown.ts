
//ANY

/**
 * Allows redeclaration
 *
 * Do not block non desired types
 *
 * Loose all benefits of TypeScript
 *
 */

const book: any = {
    author: "Author name",
    year: 2018
}

console.log(book.title)

//
let pais: any = 'Perú'
country = 1

//
function sum(a: any, b: any){
    return a+ b
}

//UNKNOWN

/**
 * Do not allow inconsistent data propagation
 */

let x:unknown = 10
let v1: number = x

/**
 * Do not allow to do operations until we define a type
 */

 function sum(a:unknown, b: number) {
    // comprobando el tipo
    if(typeof a === "number"){
        return a + b
    }
   throw new Error(`La variable '${a}' no es un número`);
    
}
sum(10,2) // 12

// Error
sum("hola",2) // La variable 'hola' no es un número
sum({a:5},2) // La variable [object Object] no es un número