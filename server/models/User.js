const { Schema, model } = require("mongoose");

// Schema to create user model
const userSchema = new Schema(
  {
    // userId: {
    //   type: String,
    //   required: true,
    //   unique: true
    // },
    // displayName: {
    //   type: String,
    //   required: true,
    // },
    userLogin: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    // profileImageURL: {
    //     type: string,
    //     required: true,
    //   },

    // viewerCount: {
    //     type: Number,
    //     required: true,
    //   },

    // gameName: {
    //     type: String,
    //     required: true,
    //   },

    // streamStatus: {
    //   type: String,
    //   require: false,
    // }
  },
  {
    // toJSON: {
    //   getters: true,
    // },
  }
);

const User = model("user", userSchema);

module.exports = User;
