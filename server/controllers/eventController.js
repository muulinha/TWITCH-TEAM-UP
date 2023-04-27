const { Event } = require('../models');

module.exports = {
  // Get all events
  getEvents(req, res) {
    Event.find()
      .then((events) => res.json(events))
      .catch((err) => res.status(500).json(err));
  },
  // Get a event
  getSingleEvent(req, res) {
    Event.findOne({ _id: req.params.eventId })
      .select('-__v')
      .then((event) =>
        !event
          ? res.status(404).json({ message: 'No event with that ID' })
          : res.json(event)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a event
  createEvent(req, res) {
    Event.create(req.body)
      .then((event) => res.json(event))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a event
  deleteEvent(req, res) {
    Event.findOneAndDelete({ _id: req.params.eventId })
      .then((event) =>
        !event
          ? res.status(404).json({ message: 'No event with that ID' })
          : Event.deleteMany({ _id: { $in: event.events } })
      )
      .then(() => res.json({ message: 'Event deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a event
  updateEvent(req, res) {
    Event.findOneAndUpdate(
      { _id: req.params.eventId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((event) =>
        !event
          ? res.status(404).json({ message: 'No event with this id!' })
          : res.json(event)
      )
      .catch((err) => res.status(500).json(err));
  },
};
