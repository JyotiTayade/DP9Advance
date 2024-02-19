var mutableVar = "Mutable";
var blockScopedVar = 10;
var immutableVariable = "Immutable";
var functionScopedVar = true;
mutableVar = "Modified";
// Block-scoped variable
if (true) {
    var blockScopedVariable = 20;
    console.log("Inside block:", blockScopedVar); // 20
}
console.log("Outside block:", blockScopedVar); // 10
// Function-scoped variable
function exampleFunction() {
    var functionScopedVariable = false; // This variable is function-scoped
    console.log("Inside function:", functionScopedVar); // false
}
exampleFunction();
console.log("Outside function:", functionScopedVar); // true (if it was declared with var)
