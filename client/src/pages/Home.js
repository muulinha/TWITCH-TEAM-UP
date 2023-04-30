import "./Home.css";

import StreamerContainer from "../components/StreamerContainer.jsx";
// import { Button } from 'bootstrap';

// API fetchToken and fetchStream should be up and running
// the fetchs shall run the requests in a loop throughout the db using the userLogin info
// ideally, the list should be ordered by "type", showing the online streamers firts

function Home() {
  return (
    <section className="">
      <div className=" m-auto" style={{ width: "70%" }}>
        <div
          className="backboard-img backboard-container "
          style={{ width: "100%" }}
        >
          <p className="main-title">STREAMERS</p>
          <StreamerContainer />
        </div>
      </div>
    </section>
  );
}

export default Home;
