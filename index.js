const express = require("express");

const app = express();
const PORT = process.env.PORT || 2345;

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.get("/movies", (req, res) => {
  res.json({ movieName: "Valimai", heroName: "Ajith Kumar" });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
