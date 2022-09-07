/**
 * Generic Types
 */

interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

//Alternative
interface Box<Type> {
  contents: Type;
}

let box: Box<string>;

//Show example with form??
