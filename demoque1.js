// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function isEqual that will return true if the numbers are equal, else return false.


// Hint: Use comparison operator (===).

// Hint: Comparison operators return a boolean value. Use a new variable which can be used to store and return the result.

// Hint: You can also use "if else" to solve this problem.


// Sample Input
// 89, 11


// Sample Output
// false

function isEqual(a,b){
    if(a === b){
        return true
    }else{
        return false
    }
}

console.log(isEqual(11,11))


// Problem Description
// You are given two numbers a and b as arguments. You have to implement the function sumOfTwoNumbers which will return the sum of these two numbers.


// Hint: Use addition operator (+).

// Hint: Use a new variable which can be used to store and return the sum.


// Sample Input
// 89, 11


// Sample Output
// 100


// Explanation
// We get 89 + 11 = 100

function sumOfTwoNumbers(a,b){
    return a + b
}

console.log(sumOfTwoNumbers(80,11))

// Problem Description
// You are given a number a as an argument. You have to implement the function findCube that will return the cube of that number. Cube of a number basically means the number is multiplied by itself thrice.


// Hint: Use multiplication operator (*).


// Sample Input
// 3


// Sample Output
// 27


// Explanation
// Cube of 3 would be 3 x 3 x 3 = 27

function findCube(a){
    return a * a * a
}

console.log(findCube(5));