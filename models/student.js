const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: Number,
    required: true
  },
  StateCode: {
    type: String,
    ref: 'State'
  }
});

module.exports = mongoose.model('Student', studentSchema);