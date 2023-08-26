// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)

// const text = "I am a developer"

// console.log(text[0])
// console.log(text[1]);
// console.log(text[2]);
// console.log(text[3]);
// console.log(text[4]);
// console.log(text[5]);
// console.log(text[6]);
// console.log(2 * 1)
// console.log(2 * 2)
// console.log(2 * 3)

// Loops 

// while loop and for loop

// pankaj -> counting , manoj -> checking , manish -> running

// let i = 1; // initilization

// while(i < 11){ // condtition
//     console.log(2 * i)
//     i++; // increment
// }

// console.log(2 * 1)
// console.log(2 * 2)
// console.log(2 * 3)
// console.log(2 * 4)
// console.log(2 * 5)
// console.log(2 * 6)
// console.log(2 * 7)
// console.log(2 * 8)
// console.log(2 * 9)
// console.log(2 * 10)

// Short 

// let start = 0 // INIT
// while(start <= 10){ // CONDITION
//     console.log(start);
//     start++ // INC
// }

// For Loop 
// for(let startPoint = 1; startPoint <= 10; startPoint++){
//     console.log(startPoint * 10)
// }

// Sample 1

// let count = 0 

// for(let i = 0; i <= 6; i++){
//     count = i + count 
//     console.log(count);
// }

// Sample 2
// i -> 0 1 2 3
// c -> 0 0 0 0
// a -> 0 1 2 3

// for(let i = 0; i <= 6; i++){ 
//     let count = 0        
//     count = i + count       
//     console.log(count);
// }



// Problem Description
// You are given a number n as an argument. You have to implement a function findSumOfFirstN which will add all the numbers from 1 to n and returns the sum.

// Please note that the value of n will be always greater than 0.


// Hint 1: Use a new variable that can be used to store and return the sum.

// Hint 2: Use for-loop to iterate from 1 to n.


// Sample Input 1
// 3


// Sample Output 1
// 6


// Explanation
// For n = 3, output is 6 i.e, 1 + 2 + 3


// Sample Input 2
// 5


// Sample Output 2
// 15


// Explanation
// For n = 5, output is 15 i.e, 1 + 2 + 3 + 4 + 5


function findSumOfFirstN(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum = i + sum
    }
    return sum
}

console.log(findSumOfFirstN(5));