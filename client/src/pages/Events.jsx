import './Events.css';
import Button from '../components/Button';
import EventLine from '../components/EventLine';


// CREATE EVENT BUTTON shall open a window requesting the
// eventDate + eventTitle + eventDescription
// Cancel and Save button required

// To activate the Edit and Delete Event the user need to click first on the line
// Then the buttons would be activated.

// For the Edit Event button, a similar windown to the "create event" shall be opened
// But prepopulated with the existing information.
// Cancel and Save button required

// Deleve Event when clicked shall have a message asking if the user is sure about the action



function Events() {
    return (
      <div className='event-container'>
      <div className='backboard-img backboard-container'>
        <p className='main-title'>UPCOMING EVENTS</p>
          <EventLine />
        <div className='event-buttons'>
          <div className='margin-buttons'>
            <Button className='margin-buttons'>CREATE <br></br>EVENT </Button>
          </div>
          <div className='margin-buttons'>
            <Button>EDIT <br></br>EVENT </Button>
          </div>
          <div className='margin-left'>
            <Button>DELETE <br></br>EVENT </Button>
          </div>
        </div>
      </div>
      </div>
      );
    }

export default Events;