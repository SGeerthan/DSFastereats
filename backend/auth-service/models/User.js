const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  role: {
    type: String,
    required: true
    //enum: ["Admin", "User", "Manager", "Other"] // You can customize roles
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('UserU', userSchema);
