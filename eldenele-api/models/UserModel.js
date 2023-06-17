const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedAds: Array,
  firstName: String,
  lastName: String,
  kullanici_adi: String,

  tel_no: String,
});

module.exports = mongoose.model("User", userSchema);
