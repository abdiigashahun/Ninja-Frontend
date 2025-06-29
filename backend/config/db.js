const mongoose = require("mongoose");

require("dotenv").config();
// console.log(process.env.MONGO_URI)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo connected succesfully");

    }catch (err) {
        console.error("MongoDb connection failed.", err)
         process.exit(1);
    }
};
module.exports = connectDB;