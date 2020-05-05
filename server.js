const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.port || 8080;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MOBGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true})


/*==============================================================
    HTML Routes
================================================================*/
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/stats", (req, res) => {
  return res.sendFile(path.join(__dirname, "public/stats.html"));
})

app.get("/exercise", (req, res) => {
  return res.sendFile(path.join(__dirname, "public/exercise.html"));
})


/*==============================================================
    Server Start
================================================================*/
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
})