const router = require("express").Router();

const ctrl = require("../controllers");

router.post("/create", ctrl.list.createList);

module.exports = router;
