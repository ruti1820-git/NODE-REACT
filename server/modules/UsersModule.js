const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
  username:
  {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  complete: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
    trim: true
  },
  lastName: {
    type: String,
    required: false,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: false,
    trim: true
  },
  address: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  roles: {
    type: String,
    enum: ["Admin", "User"],
    default: "User"

  }

})
module.exports = mongoose.model("User", UserSchema)