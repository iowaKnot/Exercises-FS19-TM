const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const pgp = require("pg-promise")();
const db = pgp("postgres://username:password@localhost:5432/database_name");

dotenv.config();

const app = express();
app.use(express.json());

app.post("/users/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await db.oneOrNone(
      "SELECT * FROM users WHERE username=$1",
      username
    );
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.none("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      hashedPassword,
    ]);

    res.json({ msg: "Signup successful. Now you can log in." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await db.oneOrNone(
      "SELECT * FROM users WHERE username=$1",
      username
    );
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid password." });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.SECRET
    );

    await db.none("UPDATE users SET token=$1 WHERE id=$2", [token, user.id]);

    res.json({ token, id: user.id, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
