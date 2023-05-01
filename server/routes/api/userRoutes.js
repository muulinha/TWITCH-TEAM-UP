const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  signupUser,
  loginUser,
  getUserProfile,
} = require("../../controllers/userController");
const authMiddleware = require("../../middleware/authMiddleware");

// /api/Users
router.route("/").get(getUsers).post(createUser);

// register User
router.route("/register").post(signupUser);

// login User
router.route("/login").post(loginUser);
// get My Porfile
router.get("/getProfile", authMiddleware, getUserProfile);

// /api/Users/:UserId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;
