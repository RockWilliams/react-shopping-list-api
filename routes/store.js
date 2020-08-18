const router = require("express").Router();

const ctrl = require("../controllers");

router.post("/createStore", ctrl.store.createStore);

module.exports = router;
