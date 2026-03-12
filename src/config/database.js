const mongoose = require('mongoose');
                 
const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://hariomrwt30032000:sWfEaO7poJoRynVd@hariomdata.q2gwzty.mongodb.net/devTinder")
}


module.exports = connectDB;

