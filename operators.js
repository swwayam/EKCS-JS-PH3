// Arithemetic Operators -> + , - , / , * , %
const num1 = 4
const num2 = 2

console.log(num1 + num2); // 6
console.log(num1 - num2); // 2 
console.log(num1 / num2); // 2
console.log(num1 * num2); // 8
console.log(num1 % num2); // 0 // % is called modolus and it returns the reminder after complete division


// Comparision Operator
let num3 = 30 // the largest of all three
let num4 = 14
let num5 = 40

console.log(num3 > num4) // false
console.log(num3 < num4); // true
console.log(num3 == num4); // true // == for comparasion // this only check if the value is same
console.log(num3 === num4); // false // this is used to read the value as well as the type should be same

// Logical Operator

// console.log(num3 > num4 > num5); // false

// && -> and
// || -> or
// ! -> not

// &&         
// True True -> True
// True False -> False
// Flase True -> False
// False False -> False

console.log(num3 > num4 && num3 > num5);

// ||         
// True True -> True
// True False -> True
// Flase True -> True
// False False -> False

console.log(num3 > num4 || num3 > num5);


// !
console.log(!(num3 > num4 && num3 > num5));

// Assignment -> =
let b = 40