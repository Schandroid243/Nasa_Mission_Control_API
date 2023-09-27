const planets = require("../../models/planets.model");
const getAllPlanets = (req, res) => {
  try {
    return res.status(200).json(planets);
  } catch (error) {
    return res.status(500).send(`An error occurred: ${error.message}`);
  }
};

module.exports = {
  getAllPlanets,
};
