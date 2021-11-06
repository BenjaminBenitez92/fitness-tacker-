const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
      },
    exercises: [
        {
            type:{
                type: String,
                required: "type of exercise?"
            },
            name:{
                type: String,
                required: "name of exercise?"
            
            },
            duration:{
                type: Number,
                required: "duration of the workout?"
            },
            weight: {
                type: Number
            },
            reps:{
                type: Number
            },
            sets:{
                type: Number
            }

        }
    ]
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

