const express = require("express")
const app = express()

app.get("/home", (req, res)=>{
    res.status(200).send({
        msg: "Home Page View"
    })
})

app.listen(8000, ()=>{
    console.log("server is running")
})