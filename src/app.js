const express = require("express");

const app = express();


app.get("/test", (req, res) => {
    res.send("hello world");
})
app.post("/test2",(req,res) => {
    res.send("hello world 2");
})

app.delete("/test3",(req,res) => {
    res.send("deleted succcessfully");
})

app.listen(7000,() =>{
    console.log("server is running on port 7000");
})