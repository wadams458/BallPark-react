const db = require("../models");

const index = (req, res) => {
  db.Park.find({}, (err, foundParks) => {
    if (err) console.log("Error in parks#index:", err);

    //     res.json({
    //       parks: foundParks,
    //       numberofParks: foundParks.length,
    //       timeRequested: new Date().toLocaleTimeString(),
    //     });
    res.json(foundParks);
  });
};

const show = (req, res) => {
  db.Park.findById(req.params.id, (err, foundPark) => {
    if (err) console.log("Error in parks#show:", err);

    res.send(foundPark);
  });
};

const create = (req, res) => {
  db.Parks.create(req.body, (err, savedPark) => {
    if (err) console.log("Error in parks#create:", err);

    res.json("savedPark");
  });
};

const update = (req, res) => {
  db.Park.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPark) => {
      if (err) console.log("Error in parks#update:", err);

      if (!updatedPark) {
        res
          .status(400)
          .json({ message: "Could not find Park with id ${req.params.id}" });
      }
      res.json(updatedPark);
    }
  );
};

const destroy = (req, res) => {
  db.Park.findByIdAndDelete(req.params.id, (err, deletedPark) => {
    if (err) console.log("Error in parks#destroy:", err);
    // res.writeHead();
    // res.writeHead();
    // res.writeHead();
    // res.end();

    res.status(200).json(deletedPark);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
