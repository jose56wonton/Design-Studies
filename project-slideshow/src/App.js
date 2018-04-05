import React, { Component } from "react";
import "./styles/styles.css";
class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="largeCard">
            <div className="left">
            <h1>Mhint</h1>
            </div>
            <div className="right">
            
            </div>
            
          </div>
          <div className="smallCard">
            <div className="textTop">
              <h2>mhint</h2>
              <h4>Your life smarter.</h4>
            </div>
            <div className="textBottom">
              <p>
                <span>What we did</span>
                <br />
                Direction, User Experience, User Interface, Development and
                Advertising.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
