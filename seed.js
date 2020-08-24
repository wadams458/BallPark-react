const db = require("./models");
const data = require("./parkData.json");

db.Park.deleteMany({}, (err, deletedParks) => {
  db.Park.create(data.parks, (err, seededParks) => {
    if (err) console.log(err);

    console.log(data.parks.length, "parks created successfully");

    process.exit();
  });
});
