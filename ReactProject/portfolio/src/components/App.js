import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualitifications";
import "../index.css";
import Courses from "./courses";
import SocialProfiless from "./SocialProfiles";
import Title from "./Title";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row">
          <Title />
          <div className="column">
            <Profile />
          </div>
          <div className="column">
            <Qualifications />
          </div>
        </div>

        <hr></hr>
        <Courses></Courses>

        <hr></hr>
        <SocialProfiless></SocialProfiless>
      </div>
    );
  }
}

export default App;
