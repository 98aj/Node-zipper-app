const express = require("express");
const { registerUser } = require("../controller/userController"); // it is function tat takes json data of user as request from frontend to backend and send resopsns ad json object from backend to frontend

const router = express.Router();

router.route("/").post(registerUser); // we post at main pae data of user

module.exports = router;
