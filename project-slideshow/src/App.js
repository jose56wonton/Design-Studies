import React, { Component } from "react";
import "./styles/styles.css";

const data = [
  {
    title: "mhint",
    subTitle: "Your life smarter",
    what: "Direction, User Experience, User Interface, Development and Advertising."
  },
  {
    title: "plac",
    subTitle: "Make every day special",
    what: "Research, Development and Distribution."
  },
  {
    title: "kira",
    subTitle: "The most powerful tool for social analytics.",
    what: "Research,Studio and Design."
  },
  {
    title: "yode",
    subTitle: "Feeling good.",
    what: "Research, User Experience, User Interface and Development."
  }
]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      current: 0,
      data: data
    }
  }
  
  render() {
    var styles = {
      backgroundImage: `${this.state.current}")`
  }
    return (
      <div className="page">
        <div className="container">
          <div className="largeCard">
            <div className="left">
              <h1>{this.state.data[0].title}</h1>
            </div>
            <div className={`right background-${this.state.current}`}/>
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
