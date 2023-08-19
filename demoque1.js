// // Problem Description
// // You are given two numbers a and b as arguments. You have to implement the function isEqual that will return true if the numbers are equal, else return false.


// // Hint: Use comparison operator (===).

// // Hint: Comparison operators return a boolean value. Use a new variable which can be used to store and return the result.

// // Hint: You can also use "if else" to solve this problem.


// // Sample Input
// // 89, 11


// // Sample Output
// // false

// function isEqual(a,b){
//     if(a === b){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isEqual(11,11))


// // Problem Description
// // You are given two numbers a and b as arguments. You have to implement the function sumOfTwoNumbers which will return the sum of these two numbers.


// // Hint: Use addition operator (+).

// // Hint: Use a new variable which can be used to store and return the sum.


// // Sample Input
// // 89, 11


// // Sample Output
// // 100


// // Explanation
// // We get 89 + 11 = 100

// function sumOfTwoNumbers(a,b){
//     return a + b
// }

// console.log(sumOfTwoNumbers(80,11))

// // Problem Description
// // You are given a number a as an argument. You have to implement the function findCube that will return the cube of that number. Cube of a number basically means the number is multiplied by itself thrice.


// // Hint: Use multiplication operator (*).


// // Sample Input
// // 3


// // Sample Output
// // 27


// // Explanation
// // Cube of 3 would be 3 x 3 x 3 = 27

// function findCube(a){
//     return a * a * a
// }

// console.log(findCube(5));

// // Q6

// // Problem Description
// // You are given three numbers a, b and c as arguments. You have to implement the function compareNumbers such that EITHER the first number is equal to the second OR the second number is equal to the third, return true. Else, return false.


// // Hint: This is a combination of comparison operator and logical operator.


// // Sample Input
// // 10, 99, 99


// // Sample Output
// // true


// // Explanation
// // The second number (99) and third number (99) are equal, hence true.


// function compareNumbers(a,b,c){
//     // if(a === b){
//     //     return true
//     // }

//     // if(b === c){
//     //     return true
//     // }

//     // return false

//     if(a === b){
//         return true
//     }else if(b === c){
//         return true
//     }

//     return false

// }


// // Q7

// // Problem Description
// // You are given three numbers a, b and c as arguments. You have to implement the function isDescending that will return true only if the first number is greater than the second number AND the second number is greater than the third number. Else, return false.

// // Hint: This is a combination of comparison operator and logical operator.

// // Sample Input
// // 10, 9, 20


// // Sample Output
// // true


// // Explanation
// // True, since 10 is greater than 9 and 9 is greater than 7.

// function isDescending(a,b,c){
//     if(a > b && b > c){
//         return true
//     }

//     return false
// }


// // Q8.

// // Problem Description
// // You are given two numbers a and b as arguments. You have to implement the function findLargest that will return the largest number between the two numbers.


// // Hint: Use comparison operator (>).
// // Hint: This can be solved u	sing if else.


// // Sample Input
// // 10, 9


// // Sample Output
// // 9


// // Explanation
// // As 9 is greater than 1, return 9.

// function findLargest(a,b){
//     if(a > b){
//         return a
//     }else{
//         return b
//     }
// }


// Q 12

function checkLeapYear(year){

    if(year % 400 == 0){
        console.log("Its a leap year")
    }else if(year % 4 == 0 && year % 100 != 0){
        console.log("Its a leap year")
    }else{
        console.log("Not Leap year");
    }
}

checkLeapYear(1000)
