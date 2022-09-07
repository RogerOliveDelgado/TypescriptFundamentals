/**
 * TYPES & INTERFACES
 */


//Types

type Point = {
    x:number,
    y: number
}

// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

  type ID = number | string

  // function sum(a:ID, b:ID){
  //   return a + b
  // }

//Interfaces

interface Person {
    name: string,
    age: number,
    hobbies: string[]
}

/**
 * Differences
 */

//Extendable

interface Animal {
    name: string
  }
  
  interface Bear extends Animal {
    honey: boolean
  }

  let bear:Bear

  bear.honey
  bear.honey

  //Interface --> We can add new properties
  //Type --> Type cannot be changed after being created

  interface Window {
    title: string
  }
  
  interface Window {
    ts: number
  }

  type Door = {
    title: string
  }
  
  type Door = {
    ts: number
  }


  