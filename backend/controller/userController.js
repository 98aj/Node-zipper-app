const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExist = await User.findOne({ email }); // it had created error as while setting up db we have not selected build-in-roal for user
  //to Avoid this error once go to Database Access click on Edit under database user privileges select Built-in role and under the dropdown select Read and write to any database to the user. Try again or refresh your connection to see the result.

  if (userExist) {
    res.status(400);

    throw new Error("User Already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(400);

    throw new Error("User Not Created");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(400);

    throw new Error("Invalid Password");
  }
});
module.exports = { registerUser, authUser };
