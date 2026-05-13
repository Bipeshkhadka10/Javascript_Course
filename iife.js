// (function() {
//     console.log("hello world");
// })();



// (()=> {
//     console.log("this is coding groups")
// })();

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

(async function() {
    console.log("data is loading.....")
    console.log(await checkStudent(student1[0]) )
    console.log("loaded data1.")
      console.log(await checkStudent(student1[1]) )
    console.log("loaded data2.")
      console.log(await checkStudent(student1[2]) )
    console.log("loaded data3.")
    console.log("successfully loaded all data")   
})();