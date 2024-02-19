

let mutableVar: string = "Mutable";
let blockScopedVar: number = 10;


const immutableVariable: string = "Immutable";


var functionScopedVar: boolean = true;


mutableVar = "Modified"; 

// Block-scoped variable
if (true) {
    let blockScopedVariable: number = 20; 
    console.log("Inside block:", blockScopedVar); // 20
}

console.log("Outside block:", blockScopedVar); // 10

// Function-scoped variable
function exampleFunction() {
    var functionScopedVariable: boolean = false; // This variable is function-scoped
    console.log("Inside function:", functionScopedVar); // false
}

exampleFunction();
console.log("Outside function:", functionScopedVar); // true (if it was declared with var)
