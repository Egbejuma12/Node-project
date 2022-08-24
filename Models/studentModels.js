const mongoose = require("mongoose");

// const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  lga: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
