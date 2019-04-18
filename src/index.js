import React, { Component } from "react";
import ReactDOM from "react-dom";
import Scorers from "./Scorers";
import "./styles.css";

class App extends Component {
  state = {
    topScorers: [
      { name: "Sergio Aguero", team: "Man City", goals: 19, assists: 7 },
      { name: "Mohamed Salah", team: "Liverpool", goals: 19, assists: 7 },
      { name: "Sadio Mane", team: "Liverpool", goals: 18, assists: 4 },
      { name: "P.Emerick Aubameyang", team: "Arsenal", goals: 18, assists: 9 },
      { name: "Raheem Sterling", team: "Man City", goals: 17, assists: 9 },
      { name: "Harry Kane", team: "Tottenham", goals: 17, assists: 4 },
      { name: "Eden Hazard", team: "Chelsea", goals: 16, assists: 12 },
      { name: "Jamie Vardy", team: "Leicester", goals: 15, assists: 4 },
      { name: "Paul Pogba", team: "Man Utd", goals: 13, assists: 9 },
      { name: "Alexandre Lacazette", team: "Arsenal", goals: 13, assists: 7 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Top Scorers List</h1>
        <Scorers scorers={this.state.topScorers} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
