import React, { Component } from "react";
import "./styles/styles.css";

const data = [
  {
    title: "Mhint",
    subTitle: "Your life smarter",
    what:
      "Direction, User Experience, User Interface, Development and Advertising."
  },
  {
    title: "Plac",
    subTitle: "Make every day special",
    what: "Research, Development and Distribution."
  },
  {
    title: "Kira",
    subTitle: "The most powerful tool for social analytics.",
    what: "Research,Studio and Design."
  },
  {
    title: "Yode",
    subTitle: "Feeling good.",
    what: "Research, User Experience, User Interface and Development."
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      data: data
    };
  }
  left = () => {
    if (this.state.current !== 0) {
      this.setState({
        current: this.state.current - 1
      });
    }
  };
  right = () => {
    if (this.state.current !== this.state.data.length-1) {
      this.setState({
        current: this.state.current + 1
      });
    }
  };
  render() {
    console.log(this.state.current);
    const currentData = this.state.data[this.state.current];
    return (
      <div className="page">
        <div className="container">
          <div className="largeCard">
            <div className="left">
              <h1>{currentData.title}</h1>
            </div>
            <div className={`right background-${this.state.current}`} />
          </div>
          <div className="smallCard">
            <div className="textTop">
              <h2>{currentData.title}</h2>
              <h4>{currentData.sub}</h4>
            </div>
            <div className="textBottom">
              <p>
                <span>What we did</span>
                <br />
                {currentData.what}
              </p>
            </div>
            <a onClick={this.left}>Left</a>
            <a onClick={this.right}>Right</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
