const express = require("express");
const { signup, login } = require("../controller/auth");
const {
  loginValidation,
  signUpValidation,
} = require("../middleware/validation");

const router = express.Router();

router.post("/signup", signUpValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;
