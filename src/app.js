const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

//middleware to parse the json to js object in the request body
app.use(express.json());



app.post("/signup",async (req,res) => {

    //create a new user instance with the data from the request body
    const user = new User(req.body)
    
    try{
    await user.save();
    res.status(200).send("user added successfully in the database")
    } catch (error) {
        res.status(400).send("Error adding user to the database" + err.message);
    }
});


 connectDB().then(() => {
    console.log("Database connected successfully");
    app.listen(7000,()=>{
    console.log("Server is running on port 7000");
});
}).catch((err) => {
    console.log("Error connecting to database: ", err);
});





