// let arry = ["ram","sita","gita","hari","narayan"];
let str = "ramesh yadav"
// console.log(typeof arry)

// length proprtry s
//  console.log(arry.length)

// console.log(arry[1])
// arry[1] = "gopal"
// console.log(arry)

// loops in array

// for(let i=0; i<arry.length; i++){
//     console.log(`the index is ${i} and its value is ${arry[i]}`)
// }


// for of loop in array
// let i=0;
// for (let value of arry){
//     console.log(`the index is ${i} and its value is ${value}`)
//     i++;
// }


// methods 
// push() -> add value at end 
// arry.push("ayush")
// arry.push("deepak","daya")


// pop()-> remove end value from array
// let deletedValue = arry.pop()
// console.log(arry)
// console.log(`the deleted value is ${deletedValue}`)

// toString() ->convert into string
let marks = [78,89,75,90,95,85]
let newNames = ["alex","julia"]
let oldNames = ["charles"]
// let newValue = arry.toString()
// let newMarks = marks.toString()

// console.log(typeof newMarks)
//console.log(arry)

// concatination -> join multiple array ->return new array
// let createdArray = arry.concat(newNames,oldNames)
// console.log(createdArray)


// unshift() -> value is added start 

// arry.unshift("alex","julia")


// // shift() -> remove value from start position 
// let deleted = arry.shift()
// console.log(deleted)
// console.log(arry)


// slice(startindex, endindex)
// let value = arry.slice(1,4)

// splice(startindex,deletecount,newValue )
let arry = ["ram","sita","gita","hari","narayan"];
arry.splice(2,0,"alex","julia","ramesh")
console.log(arry)