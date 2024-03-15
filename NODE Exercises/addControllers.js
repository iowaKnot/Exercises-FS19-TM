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

exports.getAll = (req, res) => {
  res.json(planets);
};

exports.getOneById = (req, res) => {
  const planet = planets.find(
    (planet) => planet.id === parseInt(req.params.id)
  );
  if (!planet) return res.status(404).send("Planet not found.");
  res.json(planet);
};

exports.create = (req, res) => {
  const newPlanet = { id: req.body.id, name: req.body.name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "Planet created successfully." });
};

exports.updateById = (req, res) => {
  const updatedPlanet = req.body;
  planets = planets.map((planet) => {
    if (planet.id === parseInt(req.params.id)) {
      return { ...planet, ...updatedPlanet };
    }
    return planet;
  });
  res.status(200).json({ msg: "Planet updated successfully." });
};

exports.deleteById = (req, res) => {
  planets = planets.filter((planet) => planet.id !== parseInt(req.params.id));
  res.status(200).json({ msg: "Planet deleted successfully." });
};

// Routes

const express = require("express");
const planetsController = require("./controllers/planets");

const router = express.Router();

router.get("/", planetsController.getAll);

router.get("/:id", planetsController.getOneById);

router.post("/", planetsController.create);

router.put("/:id", planetsController.updateById);

router.delete("/:id", planetsController.deleteById);

module.exports = router;

// Server

const express = require("express");
const app = express();
const planetRoutes = require("./planetRoutes");

app.use("/api/planets", planetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
