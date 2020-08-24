const db = require("../models");

const index = (req, res) => {
  db.Park.find({}, (err, foundParks) => {
    if (err) console.log("Error in parks#index:", err);

    res.json({ Name: "Truist Park", Team: "Atlanta Braves", City: "Atlanta" });
  });
};

const show = (req, res) => {
  db.Park.findById(req.params.id, (err, foundPark) => {
    if (err) console.log("Error in parks#show:", err);

    res.send("Incomplete parks#show controller function");
  });
};

const create = (req, res) => {
  db.Parks.create(req.body, (err, savedPark) => {
    if (err) console.log("Error in parks#create:", err);

    res.send("Incomplete parks#create controller function");
  });
};

const update = (req, res) => {
  db.Park.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPark) => {
      if (err) console.log("Error in parks#update:", err);

      res.send("Incomplete parks#update controller function");
    }
  );
};

const destroy = (req, res) => {
  db.Park.findByIdAndDelete(req.params.id, (err, deletedPark) => {
    if (err) console.log("Error in parks#destroy:", err);

    res.send("Incomplete parks#destroy controller function");
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
