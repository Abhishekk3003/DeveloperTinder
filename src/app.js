const express = require("express");

const app = express();


app.use("/test", (req, res) => {
    res.send("hello world");
})
app.use("/test2",(req,res) => {
    res.send("hello world 2");
})


app.listen(7000,() =>{
    console.log("server is running on port 7000");
})