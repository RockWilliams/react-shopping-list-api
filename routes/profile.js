const router = require("express").Router();

const ctrl = require("../controllers");

router.get("/", ctrl.profile.currentUserDetails);

module.exports = router;
