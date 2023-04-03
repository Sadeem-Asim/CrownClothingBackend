const express = require("express");
const shopController = require("../controllers/shopController");
const router = express.Router();

router.get("/get", shopController.get);
router.post("/makeNewItem", shopController.makeNewItem);
// router.post("/payment", shopController.newPayment);
// router.get("payment", shopController.getAllPayment);
module.exports = router;
