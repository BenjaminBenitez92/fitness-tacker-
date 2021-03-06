const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: "type of exercise?",
        },
        name: {
          type: String,
          required: "name of exercise?",
        },
        duration: {
          type: Number,
          required: "duration of the workout?",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
      toJSON: {
          virtuals: true
      }
  }
);

workoutSchema.virtual('totalDuration').get(function() {
    let arrOfExercises = this.exercises;
    let totalDur = 0
    arrOfExercises.forEach(index => {
        totalDur += index.duration
    })

    return totalDur
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
