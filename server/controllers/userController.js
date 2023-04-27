// const twitchAPI = require('../Utils/twitch');

// ObjectId() method for converting userId string into an ObjectId for querying database
// const { ObjectId } = require('mongoose').Types;
const { User, Event } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users
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
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user
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
          ? res.status(404).json({ message: 'No user with that ID' })
          : User.deleteMany({ _id: { $in: user.users } })
      )
      .then(() => res.json({ message: 'User deleted!' }))
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
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  }


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
