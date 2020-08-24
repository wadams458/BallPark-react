const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: String,
  publisher: String,
  coverArtUrl: String,
  completed: Boolean,
});

const Park = mongoose.model("Park", ParkSchema);

module.exports = Park;
