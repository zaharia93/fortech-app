import express from "express";
const mongoose = require("mongoose");
const router = require("./routes/movie-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/movies", router); // localhost:5000/movies

mongoose
  .connect(
    "mongodb+srv://admin:ubwFHDPhc3wD4ILq@cluster0.gxhfl.mongodb.net/watchList?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err: any) => console.log(err)); 