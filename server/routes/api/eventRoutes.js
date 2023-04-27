const router = require('express').Router();
const {
  getEvents,
  getSingleEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../../controllers/eventController.js');

// /api/events
router.route('/').get(getEvents).post(createEvent);

// /api/events/:eventId
router
  .route('/:eventId')
  .get(getSingleEvent)
  .put(updateEvent)
  .delete(deleteEvent);

module.exports = router;
