const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.error("Error connecting to Mongodb: ", error);
  }
};

module.exports = connectDb;
