const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {

    let data = req.body
    if(!data){
        res.json("message: no data send")
    }
    console.log(req.body);

    res.json({
        message: "Registration successful",
        data: data
    }); 

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});