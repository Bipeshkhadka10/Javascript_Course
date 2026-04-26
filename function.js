// function-> input - processing - output

// function functionName (parameter){
//  statement
// }

// declare
// function userName(name){
//     console.log("he is bad");
//     return "hello " + name;
// }

// call
// userName("ram")
// console.log(userName("ram"))




var  num1 = 6
// function add (){
//     let num = 20
//     let count = 30
//     console.log(count , num)
//     console.log(num1)
// }
// // console.log(num, count)
// add()


// this 

// let useradd = ()=> console.log(2+5) ; 
// console.log(useradd())



// function define
// function sum (x,y){     // parameter 
//    console.log("before return")
//    return x+y;
// }

// let a = 5;
// let b =7
// // function call / invoke
// console.log(sum(a,b))    // arguments


// arrow function - modern js  is has no this pointer

// let helloFunction = (parameter1,parameter2)=> console.log("hello world");
// helloFunction();

// let obj = {
// name : 123 ,
// show : function () {
// console . log ( this . name ) ;
// }
// };

// obj.show()


// callback function 
//  function sum(a,b,statefunction){
//   let result = a + b;
   
//    if(result >5){
//       statefunction()
//    }else{
//       console.log("invalid sum")
//    }

   
//  }

//  function resultFunction(a,b){
//    console.log("callback fuction")
//  }


//  sum(4,7,resultFunction)


// array methods -> forEach(), map(), filter(), reduce()
// forEach()-> 
// map()->
// filter()->
// reduce()->
let arry = [2,5,7,8,3,5,3,6]
let name = ["ram","gita","hari","jyoti","ayush"]


// example fo forEach((value,index,array)=>{})
// name.forEach((value,index,name)=>{
//    console.log("the name is :",value.toUpperCase() + " index : " + index)
// })

// map((value,index,array)=>{ })
// let newArray = arry.map((n,index)=>{
//    return n + 2
// })
// console.log(newArray)


// filter((value,index,array)=>{})
// let odd = arry.filter((value)=>{
//    return value % 2 !== 0;
// })

// let choose = name.filter((na)=> na==="ram")
// console.log(choose)
// console.log(odd)


// reduce((previouValue,nextValue)=> per + next)

let avg= arry.reduce((pervs,nexts)=> (pervs+nexts)/arry.length)
console.log(avg)