const mongoose = require("mongoose")
const BasketSchema = new mongoose.Schema({
  nameUser:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  ProuductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products"
  },
  Qentity: {
    type: Number,
    min: 0,
    default: 1
  }

})
module.exports = mongoose.model("Basket", BasketSchema)