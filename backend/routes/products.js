const express = require("express");
const { ensureAuth } = require("../middleware/auth");

const router = express.Router();

router.get("/", ensureAuth, (req, res) => {
  console.log(req.user);
  res.status(200).json([
    {
      name: "one",
      age: 1,
    },
    {
      name: "two",
      age: 2,
    },
  ]);
});

module.exports = router;
