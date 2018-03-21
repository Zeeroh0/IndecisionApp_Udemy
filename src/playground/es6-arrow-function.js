const square = function (x) {
    return x*x;
};
// The above ES5 function could be rewritten as a named function instead
// // of a declared variable
// function square (x) {
//     return x*x;
// }

// All Arrow Functions are annonymous; you can't name them.
// const squareArrow = (x) => {
//     return x*x;
// };

// In order to refer to an Arrow Function later, you must assign it 
// to a variable, like above.

// Arrow Functions have a very conceise sintax. See below. (Above examples are called
// the "Verbose Syntax")

// const squareArrow = x => x*x;

// console.log(squareArrow(4));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName("Charlie Boy"));

const shortGetFirstName = fullName => fullName.split(' ')[0];

console.log(shortGetFirstName("Harvey Cat"));


