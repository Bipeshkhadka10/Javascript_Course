// localstorage
// methods
// 1. setItem("key","value")
//  function handleSave(){
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     localStorage.setItem("name",name)
//     localStorage.setItem("age",age)
//     alert("data saved")
//  }

// //  2. getItem("key")
//  function handleShow(){
//     let name = localStorage.getItem("name");
//     let age = localStorage.getItem("age")
//     alert(`the name is ${name} and age is ${age}`)

//     let div = document.querySelector("div");
//     div.innerHTML = "<h1>name:" + name +"</h1>" + "<br>" + "age: " + age
 
//  }

// //  3. removeItem("key")

//  function handleDelete(){
//     // localStorage.removeItem("age")
//     localStorage.clear()
//     alert(`the removed data `)

//  }

//   let key = localStorage.key(1)

//  console.log(key)
//  console.log(localStorage.length)


// event handling
// JS handle
// let btn = document.querySelector("#evt")

// btn.onclick = (e)=>{
//     console.log(e.clientY)
// }

// btn.onclick= ()=>{
//     alert("hey")
// }

// node.addEventListner("click", callback)

let btn = document.querySelector("#evt")

btn.addEventListener('click',(e)=>{
    console.log(e.target)
})

btn.addEventListener('click',()=>{
    console.log("event performed")
})

 let eventHandle = ()=>{
    alert("hey")
}

btn.addEventListener('click',eventHandle)

// removeEventListner("event",callback)

btn.removeEventListener('click',eventHandle)
