// DataTypes
// premitive datatype
// number, boolen, string, bigint, undefine, null, symbole

let name = "Rahul yadav"
let age = 12
let isFollowing = false
let phoneNumber = 2389742384666n
let city = undefined
let course = null

console.log(name,age,isFollowing,phoneNumber,city,course)

// symbole

let id1 = Symbol('id')

// object
const student={
    [id1]:1,
    name:"Ramesh chauday",
    faculty:"CSIT",
    isFollowing:true
}

console.log("Student Details")
console.log(student)
console.log("student name:",student.name)
console.log("student age:",student.age)
console.log("student faculy:",student.faculty)
console.log(student[id1])

student.name = "nabin yadav"
console.log(student)

// Arrays
let Arry = ["ram","sita", "hari","gita",2,"ggg"]
console.log("Array:")
console.log(Arry)
console.log(Arry[5])
Arry[1] = "rita"
console.log(Arry)


// function 

// function add (a,b){
//     return a+b
// }

const add = (a,b)=>{
    return a+b
}

console.log("the addition a,b is :",add(5,3))