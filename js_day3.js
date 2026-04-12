// Operators
// a,b,c -> operand
// +,-,*,%,/ ->operator

// 1.Artihmetic operator
let a = 6
let b = 7
// Addition
console.log("the addition is ", a + b)
// subtraction
console.log("the subtraction is ", a - b)
// multipliciton
console.log("the multiplication is ", a * b)
// division
console.log("the division is ", a / b)
// modulus
console.log("the modulus is ", a % b)


// 2. Assignment opreator
console.log("the Assignment operator is ")
 let nameFirst = "ram"
 let namelast = " bista"
 let name = nameFirst+namelast

 let x = 5
    x +=2  // x = x + 2
    x -=2  // x = x - 2
    x *=2  // x = x * 2
    x /=2  // x = x / 2
 console.log("concatination:",nameFirst + 3)
 console.log("new value of x: ",x)



//  3. comparision operator

let u = 2
let v = "5"

// ==
console.log("the result of == is :", u == v)
// ===
console.log("the result of === is :", u === v)
//  !=
console.log("the result is != :", u != v)
// !==
console.log("the result of !== is :", u !== v)
// <, >, <=,>=
console.log("the result is :", 2 <= 2)


// 4. logical operators

// AND(&&)

console.log("And operation:", 2<5 && 3<1)

// OR (||)
console.log("OR operation:", 2>5 || 3<1)

// ! NOT
let c = 5
console.log("NOT operation:", a != 5)


// increment and decrement orpeator
// pre -> agadi ,post -> paxi 

// pre increment
console.log("pre increment:",--c) //c=6
// post increment
console.log("post increment:",c--) //c=6+1
console.log("new increment:",c)


// decrement operator (--)


// ternary operator (?)
//  condition ? truestatement : false statemetnt
let d= 7
let e = 3
let result = d>e ? console.log("d is greater") :  console.log("e is greater")

let Arr  = [2,4,6,7]
console.log(typeof name)
console.log(Arr instanceof Arry)