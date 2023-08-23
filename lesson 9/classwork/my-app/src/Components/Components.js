import React, { Component } from "react";

export default class Componentt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "Component",
    };
  }
  changeText = () => {
    this.setState({ hello: "Hello Rostyk! It's great day" });
  };
  render() {
    return (
      <div>
        <div>{this.state.hello}</div>
        <button onClick={this.changeText}>Click me toooooo</button>
        <p>{this.props.age}</p>
        <p>{this.props.isFrontend}</p>
      </div>
    );
  }
}
