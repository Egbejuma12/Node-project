const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    process.env.mongoDB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Mongodb connected");
    }
  );
};


module.exports = connectDB;
