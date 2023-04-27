const { Schema, model } = require('mongoose');

// Schema to create Event model
const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      max_length: 50,
    },
    description: {
      type: String,
      required: true,
    },

// Format the date in future, good to have
    // date: {
    //     type: Date,
    //     required: true,
    //   },


// need to ad the twitch api info here ...

    // userProfilePicture: {
    //   type: Image,
    //   required: true
    // },

    // userDisplayName: {
    //   type: String,
    //   required: true
    // }



  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Event = model('event', eventSchema);

module.exports = Event;
