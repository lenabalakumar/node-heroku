const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 2345;

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.get("/movies", (req, res) => {
  res.json({ movieName: "Valimai", heroName: "Ajith Kumar" });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
