const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: {
    type: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    duration: {
      type: Number,
      trim: true
    },
    weight: {
      type: Number,
      trim: true
    },
    reps: {
      type: Number,
      trim: true
    },
    sets: {
      type: Number,
      trim: true
    }   
  }
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
