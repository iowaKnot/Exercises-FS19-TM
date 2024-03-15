const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const pgp = require("pg-promise")();
const db = pgp("postgres://username:password@localhost:5432/database_name");

dotenv.config();

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB max file size
}).single("image");

app.get("/users/logout", authorize, async (req, res) => {
  try {
    await db.none("UPDATE users SET token=NULL WHERE id=$1", req.user.id);
    res.json({ msg: "Logout successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function authorize(req, res, next) {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: "Unauthorized." });
    }
    req.user = user;
    next();
  })(req, res, next);
}

app.post("/users/login", async (req, res) => {});

app.post("/planets/:id/image", authorize, (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    try {
      const imagePath = req.file.path;
      await db.none("UPDATE planets SET image=$1 WHERE id=$2", [
        imagePath,
        req.params.id,
      ]);
      res.status(200).json({ msg: "Image uploaded successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});

// Server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
