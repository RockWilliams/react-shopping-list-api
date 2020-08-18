const router = require("express").Router();

const ctrl = require("../controllers");

router.post("/createProduct/:id", ctrl.product.createProduct);

module.exports = router;
