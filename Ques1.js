function outerFunction(outerParam) {
    let outerVariable = "I'm an outer variable";

    function innerFunction(innerParam) {
        console.log("Outer Parameter: " + outerParam); // Accessing outer function's parameter
        console.log("Outer Variable: " + outerVariable); // Accessing outer function's variable
        console.log("Inner Parameter: " + innerParam); // Accessing inner function's parameter
    }

    return innerFunction;
}

// Demonstrate lexical scoping
const innerFunc = outerFunction("Hello, World!");
innerFunc("Inner Value");
