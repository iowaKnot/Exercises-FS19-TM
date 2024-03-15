const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://username:password@localhost:5432/database_name");

const app = express();
app.use(bodyParser.json());

app.get("/planets", async (req, res) => {
  try {
    const planets = await db.any("SELECT * FROM planets");
    res.json(planets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/planets/:id", async (req, res) => {
  try {
    const planet = await db.oneOrNone(
      "SELECT * FROM planets WHERE id=$1",
      req.params.id
    );
    if (planet) {
      res.json(planet);
    } else {
      res.status(404).send("Planet not found.");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/planets", async (req, res) => {
  try {
    await db.none("INSERT INTO planets (name) VALUES ($1)", req.body.name);
    res.status(201).json({ msg: "Planet created successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/planets/:id", async (req, res) => {
  try {
    await db.none("UPDATE planets SET name=$1 WHERE id=$2", [
      req.body.name,
      req.params.id,
    ]);
    res.status(200).json({ msg: "Planet updated successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/planets/:id", async (req, res) => {
  try {
    await db.none("DELETE FROM planets WHERE id=$1", req.params.id);
    res.status(200).json({ msg: "Planet deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
