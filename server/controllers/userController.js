// const twitchAPI = require('../Utils/twitch');

// ObjectId() method for converting userId string into an ObjectId for querying database
// const { ObjectId } = require('mongoose').Types;
const { User, Event } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : User.deleteMany({ _id: { $in: user.users } })
      )
      .then(() => res.json({ message: "User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Signup user
  async signupUser(req, res) {
    try {
      // See if the user exists
      let userCheck = await User.findOne({ userLogin: req.body.userLogin });
      if (userCheck) {
        //this will throw an error if the user is trying to create an account that already exists
        return res
          .status(400)
          .json({ success: false, message: "user already exists" });
      } else {
        // Create a new user object with the data from req.body
        const user = await User.create({
          ...req.body,
        });
        // Encrypt the password
        const salt = await bcrypt.genSalt(12);
        console.log(salt, "salt");
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();
        //  Return jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 360000 },
          (err, token) => {
            if (err) {
              throw err;
            }
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.error(err, "THis is not working");
      res.status(500).json({ success: false, message: err });
    }
  },
  // Login User
  async loginUser(req, res) {
    try {
      console.log(req.body);

      // See if the user exists
      let user = await User.findOne({ userLogin: req.body.userLogin });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Check if the password matches
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: err });
    }
  },
  async getUserProfile(req, res) {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
  // Delete a user and remove them from the event
  // deleteUser(req, res) {
  //   User.findOneAndDelete({ _id: req.params.userId })
  //     .then((user) =>
  //       !user
  //         ? res.status(404).json({ message: 'No such user exists' })
  //         : User.deleteMany({ _id: { $in: user.users } })

  //         // : Event.findOneAndUpdate(
  //         //     { user: req.params.userId },
  //         //     { $pull: { user: req.params.userId } },
  //         //     { new: true }
  //         //   )
  //     )
  //     .then(() => res.json({ message: 'User deleted!' }))
  //     // .then((event) =>
  //     //   !event
  //     //     ? res.status(404).json({
  //     //         message: 'User deleted, but no event found',
  //     //       })
  //     //     : res.json({ message: 'User successfully deleted' })
  //     // )
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
};
