const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./UserModel");

const AdvertSchema = new Schema({
//  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  categoryName: { type: String, ref: "Category", required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  dateCreated: { type: String, default: () => new Date().toLocaleDateString() },
});

const Advert = mongoose.model("Advert", AdvertSchema);

module.exports = Advert;
