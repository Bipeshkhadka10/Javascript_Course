// syntax 
// if(condition)
//  {statement}

let age =22
// ternary operator
let result = (age>=18) ? "Adult" : "Minor"
console.log(result)

// if-else
// if (age >= 18)
//     {
//      console.log("you can vote")
//     }
//     else{
//         console.log("you cannot vote")
//     }
    

// if-else else-if

// if(age <= 5){
//     console.log('you are child')
// }
// else if(age > 5 && age <=22){
//     console.log('you are teenager')
// }
// else if(age > 22 && age <=40){
//     console.log('you are adult')
// }
// else if(age > 40 ){
//     console.log('you are oldage')
// }
// else{
//     console.log("age doesn't exist")
// }

// nested if condition
// if(age <= 5){
//    if(age <= 0)
//    {
//     console.log("invalid age")
//    }else{
//    console.log("child")
//    }
// }

// switch 
const day = 5

switch(day){
    case 1:
        console.log("today is sunday");
        break;
    case 2:
        console.log("today is monday");
        break;
    case 3:
        console.log("today is tuesday");
        break;
    case 4:
        console.log("today is wensday");
        break;
    case 5:
        console.log("today is thrusday");
        break;
    case 6:
        console.log("today is friday");
        break;
    case 7:
        console.log("today is saturday");
        break;
    default:
        console.log("invalid days")

    
}


// let opertor = "/"
// let a = 5
// let b = 7

// switch(opertor){
//     case "+":
//         console.log("a+b: ",a+b)
//         break;
//     case "-":
//         console.log("a-b: ",a-b)
//         break;
//     case "*":
//         console.log("a*b: ",a*b)
//         break;

//     default:
//         console.log("invalid operator")
// }


// random number

let computerguess = Math.floor(Math.random()*100 + 1) //0-10
console.log(computerguess)


let predict = ['sicssor','paper', 'rock' ]
let number  = Math.floor(Math.random()*3)

let geuss =predict[number]
console.log(number)
console.log(geuss)

let min =50
let max= 80
let range = Math.floor(Math.random() *(max-min) +1) + min 
console.log(range)