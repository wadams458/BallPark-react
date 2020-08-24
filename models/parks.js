const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
  title: String,
  publisher: String,
  coverArtUrl: String,
  completed: Boolean,
});

const Park = mongoose.model("Park", ParkSchema);

module.exports = Park;
