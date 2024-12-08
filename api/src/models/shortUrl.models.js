const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
