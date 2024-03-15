const express = require("express");
const router = express.Router();
const Joi = require("joi");

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

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

function validatePlanet(req, res, next) {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

router.get("/", (req, res) => {
  res.json(planets);
});

router.get("/:id", (req, res) => {
  const planet = planets.find((p) => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).send("Planet not found.");
  res.json(planet);
});

router.post("/", validatePlanet, (req, res) => {
  const newPlanet = req.body;
  planets.push(newPlanet);
  res.status(201).json({ msg: "Planet created successfully." });
});

router.put("/:id", validatePlanet, (req, res) => {
  const planetIndex = planets.findIndex((p) => p.id === parseInt(req.params.id));
  if (planetIndex === -1) return res.status(404).send("Planet not found.");
  planets[planetIndex] = req.body;
  res.status(200).json({ msg: "Planet updated successfully." });
});

router.delete("/:id", (req, res) => {
  const planetIndex = planets.findIndex((p) => p.id === parseInt(req.params.id));
  if (planetIndex === -1) return res.status(404).send("Planet not found.");
  planets.splice(planetIndex, 1);
  res.status(200).json({ msg: "Planet deleted successfully." });
});

module.exports = router;

const express = require("express");
const app = express();
const planetRoutes = require("./planetRoutes");

app.use("/api/planets", planetRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
