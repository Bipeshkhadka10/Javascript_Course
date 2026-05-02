 // selector
        // id,class,tag
        // id selector
        // let title1 = document.getElementById("title1")
        // let btn = document.getElementById("btn")
        // let title = document.getElementsByClassName("title")
        // console.log(title[1])
        // let btn = document.getElementsByTagName("p")
        // console.log(btn)
       //  let var1 = document.querySelector(".title") // first element 
       //  let var2 = document.querySelectorAll(".title") // multiple element 
       //  console.log(var2 )

       // properties of DoM manuplations
       // tagname
       // innerText
       let heading1 = document.querySelector("#title1")
       // console.log(heading1.innerText)
       // heading1.innerText = "this is content"

       // innerHTML
       // console.log(document.body.innerHTML)
       // heading1.innerHTML = heading1.innerHTML + " newClass"       
       // console.log(heading1.textContent)
       // console.log(document.body.lastChild)

       // let id  = heading1.getAttribute("id")
       let tagname = document.querySelector('img')
       // tagname.setAttribute("src","bip.jpg")
       // heading1.style.backgroundColor = "red"
       // heading1.style.fontSize = "60px"

       let div = document.querySelector("div")
       let btn = document.createElement("button")
       btn.textContent = "alert message"
       div.after(btn)

       let ul = document.querySelector("ul")
       let li = document.createElement("li")
       li.textContent = "item1"
       ul.appendChild(li)

       ul.removeChild(li)
       btn.remove()
       




       
       

     

