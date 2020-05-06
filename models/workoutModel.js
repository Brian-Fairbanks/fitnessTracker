const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: ["Exercise"],
  totalDuration:{
    type:Number,
    default:0
  }
});

WorkoutSchema.methods.setDur = function() {
  const dur = 0;
  for (ex in this.exercises){
    dur+=ex.duration;
  }
  return this.totalDuration = dur;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
