const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  res.json({
    name,
    email,
  });
});

module.exports = { registerUser };
