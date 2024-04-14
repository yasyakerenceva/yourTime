const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/", require("./auth"));
router.use("/projects", require("./project"));
router.use("/profile", require("./profile"));

module.exports = router;
