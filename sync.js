// console.log("executed data1")
// console.log("executed data2")
// setTimeout(() => {
//     // console.log("executed data3")
//     alert("data send")
// }, 3000); // duration 1s =1000ms
// console.log("executed data4")
// console.log("executed data5")



// setInterval(() => {
//     console.log("data loading1...")
// }, 2000);


// digital clock

// setInterval(()=>{
//     let time = new Date()
//     console.log(time.toLocaleString())
// },1000)



// async through callback
// function functionName (callback){}



// callback()


let student = [
    {
        userId:"001",
        name:"Ram joshi",
        department:"General Science"
    },
    {
        userId:"002",
        name:"Ayush chand",
        department:"CSIT"
    },
      {
        userId:"003",
        name:"Jeewen Aidi",
        department:"Computer Engineering"
      }
]

// function getUser(data,callback){
//     setTimeout(()=>{
//         console.log("data is loading.....")
//         console.log(data)
//         console.log(`userid:${data.userId}\nname:${data.name}\ndepartment:${data.department}`)
//         // check callback function
//         if(callback){
//             callback();
//         }
//     },2000)
// }

// getUser(student[0],()=>{
//     console.log("loading next data2")
//     getUser(student[1],()=>{
//         console.log("loading next data3")
//             getUser(student[2],()=>{
//         console.log("loading next data3")
//         getUser(student[2])
//     })
//     })
// })

// promises
// let variable = new Promise((resolve,reject)=>{
//  resolve("sucessfully resolved")
// reject("error occured")
// })

// resove(()=>{
//     let name = "ramesh yadav"
//     console.log(name)
// })

function checkStudent(student){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(!student.marks || !student.name)
            {
                reject("invalid student data.")
            }else{
              let grade;
              if(student.marks >=80 ) grade = "A" ;
              else if(student.marks >= 60 ) grade = "B";
              else if(student.marks >= 40 ) grade = "4";
              else grade = "fail";

              resolve({
                userId:student.userId,
                name:student.name,
                marks:student.marks,
                grade:grade
              } );
            }
        },2000);
    })
}


let student1=[
    {
        userId:"001",
        name:"Ram joshi",
        marks:90
    },
    {
        userId:"002",
        name:"Ayush chand",
       marks:75
    },
      {
        userId:"003",
        name:"Jeewen Aidi",
        marks:80
      }
]


// promise.then(()=>{
//  console.log("data get successfully")})
checkStudent(student1[0])
.then((rev)=>{
    console.log("data loaded succesfully..",rev)
    return checkStudent(student1[1])
})
.then((rev)=>{
    console.log("data loaded succesfully..",rev)
    return checkStudent(student1[2])
})
.then((rev)=>{
    console.log("data loaded succesfully..",rev)
    console.log("all data loaded")
})
.catch((err)=>{
    console.error(err)
})