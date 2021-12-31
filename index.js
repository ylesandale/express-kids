import express from "express";
import mongoose from "mongoose";
import PostRouter from "./Post/PostRouter.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:123@cluster0.fnnz6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", PostRouter);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
