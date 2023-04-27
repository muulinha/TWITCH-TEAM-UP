import './Home.css';

import StreamerContainer from '../components/StreamerContainer.jsx';
// import { Button } from 'bootstrap';

// API fetchToken and fetchStream should be up and running
// the fetchs shall run the requests in a loop throughout the db using the userLogin info
// ideally, the list should be ordered by "type", showing the online streamers firts

function Home() {
    return (
<section className='home-layout'>
  <div className='backboard-container-home '>
    <div className='backboard-img backboard-container'>
      <p className='main-title'> 
        STREAMERS
        </p>
        <StreamerContainer />
        </div>
    </div>

    </section>
      );
    }

export default Home;

