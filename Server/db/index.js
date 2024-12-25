const mongoose = require("mongoose");
const { username,password } = require("./config.js");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@mydb.nvmdb.mongodb.net/?retryWrites=true&w=majority&appName=myDb`
  )
  .then(() => console.log("connected mongodb"))
  .catch((e) => console.log(e));
