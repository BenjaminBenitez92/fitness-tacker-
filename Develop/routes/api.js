const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create(body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});