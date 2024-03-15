const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://username:password@localhost:5432/database_name");

const app = express();
app.use(bodyParser.json());

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
  limits: { fileSize: 1000000 },
}).single("image");

app.post("/planets/:id/image", (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
