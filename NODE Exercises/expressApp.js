const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const asyncErrors = require("express-async-errors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/planets", (req, res) => {
  res.json(planets);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
