// imports
const router = require("express").Router();
const ctrl = require("../controllers");
const authRequired = require("../middleware/authRequired");

// routes
router.get("/", ctrl.parks.index);
router.get("/:id", ctrl.parks.show);
// router.post("/", authRequired, ctrl.parks.create);
router.post("/", ctrl.parks.create);
router.put("/:id", authRequired, ctrl.parks.update);
router.delete("/:id", authRequired, ctrl.parks.destroy);

// exports
module.exports = router;
