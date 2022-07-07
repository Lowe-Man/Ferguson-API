const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stateSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  StateCode: {
    type: String,
    required: true,
    unique: true
  },
  StateName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('State', stateSchema);