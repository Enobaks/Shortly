const mongoose = require("mongoose");
// const config = require("config")
require("dotenv").config();

const url = process.env.MONGO_URI;
const base_url = process.env.BASE_URL
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
