import React from "react";
import profilepicture from "../assets/ahmed.jpg";

class Profile extends React.Component {
  constructor() {
    super();
    this.mystyle = { width: "200px", height: "200px", borderRadius: "100px" };
    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
 /*    if (this.state.displayBio === true) {
     // this.state.displayBio = false;
     this.setState({displayBio: false});
    } else {
     // this.state.displayBio = true;
     this.setState({displayBio: true});
    } */

    this.setState({displayBio:!this.state.displayBio});
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <img src={profilepicture} className="profile" c alt="profile" />
        <h1>hello</h1>
        <p>My Name Is Ahmed</p>
        {this.state.displayBio === true ? (
          <div>
            <p>i love Football</p>
            <p>i love Gym</p>
            <p>i love Books</p>
            <button onClick={this.toggle} className="btn">
              Hide
            </button>
          </div>
        ) : (
          <button onClick={this.toggle} className="btn">
            Show More
          </button>
        )}
      </div>
    );
  }
}

export default Profile;
