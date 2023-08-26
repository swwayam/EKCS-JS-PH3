const name = "Manoj and Amulya have joined the session"
console.log(name);

// Strings are immutable in js 
// string counting -> indexing starts from 0

console.log(name[0]); // M
console.log(name[10]);
console.log(name[39]); // n
console.log(name.length); // char count starts 1 and index starts 0

// if we want the last character 
console.log(name[name.length - 2]);


console.log(name[39]); // n

console.log(name[name.length - 2]); // [40-2] -> name[38]

// console.log(name[0] + name[1] + name[2] + name[3] + name[4])

// substr -> returns a part of string
console.log(name.substr(0,5))

const name1 = name.substr(10,6) // Manoj
console.log(name1);