import React from "react";
import "./App.css";
import Componentt from "./Components/Components";

const styling = {
  margin: "60px",
};

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <h1 style={styling}>Hello World</h1>
        <p className="paragraph">i am 2000 points in the desk</p>
        <Componentt age={24} isFrontend="React" />
        <Componentt></Componentt>
      </div>
    );
  }
}
export default App;
