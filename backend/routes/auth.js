const express = require("express");
const {
  register,
  OTPverification,
  login,
  foregtPasswordOTP,
  resetPassword,
} = require("../controllers/auth.js");

const router = express.Router();

router.post("/register", register);
router.post("/OTPverification", OTPverification);
router.post("/login", login);
router.post("/foregtPasswordOTP", foregtPasswordOTP);
router.post("/resetPassword", resetPassword);

module.exports = router;
