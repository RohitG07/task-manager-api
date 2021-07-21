const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
    trim: true,
    maxlength: [22, "Cant be more than 22 characters"]
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
