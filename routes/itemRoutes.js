const express = require("express");
const router = express.Router();

const {
  getItems,
  createItem,
  deleteItem,
  updateItem,
  searchItems
} = require("../controllers/itemController");

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);
router.get("/search", searchItems);

module.exports = router;