const express = require("express");
const router = express.Router();
const { getTags, postTags, deleteTags } = require("../controllers/tagController");

router.get("/", getTags);
router.post("/", postTags);
router.delete("/:id", deleteTags);

module.exports = router;