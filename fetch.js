// fetch AIP method

// async function getData() {
//     let response = await fetch("https://dogapi.dog/api/v2/breeds")  //GET method
//     // let data = await response.json() // convert into json formate
//     // console.log(data.data[0].attributes.name)
//     console.log(response)
// }
// getData();


async function sendData(){
    let person = {
        name: "Ayush chand",
        email: "ayushchand123@gmail.com",
        college: "SNSC"
    };

    let response = await fetch("http://localhost:5000/register",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(person)
    });

    let data = await response.json();
    console.log(data)

}

