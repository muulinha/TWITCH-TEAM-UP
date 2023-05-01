const jwt = require("jsonwebtoken");
const { castObject } = require("../models/User");
const User = require("../models/User");
require("dotenv").config();
const authMiddleware = async (req, res, next) => {
  try {
    // Check if the authorization header is present
    if (!req.headers.authorization) {
      throw new Error();
    }

    // Get the token from the request headers
    const token = req.headers.authorization.split(" ")[1];

    // Verify the token
    // console.log(token, "process.env.JWT_SECRET");

    // console.log(process.env.JWT_SECRET, "process.env.JWT_SECRET");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Find the user associated with the token
    const user = await User.findById(decoded.user.id);
    console.log("decoded:", decoded);
    // console.log("user:", user);

    // If user not found, throw an error
    if (!user) {
      throw new Error();
    }

    // Add the user object to the request object
    req.user = user;

    // Call the next middleware
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Authentication failed" });
  }
};

module.exports = authMiddleware;
