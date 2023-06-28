const mongoose = require("mongoose");
//connecting online databas of mongodb to node js backend by using mongoose
//creat an async function and use mongoose.connect the file and uri is been save to .env file and all secreat thing are saved to that place
//

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error", error);
    process.exit();
  }
};

module.exports = connectDb;
