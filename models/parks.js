const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
  Name: String,
  Team: String,
  City: String,
  coverArtUrl: String,
  // completed: Boolean,
});

const Park = mongoose.model("Park", ParkSchema);

module.exports = Park;
