import React from "react";

class Expandable extends React.Component {
  constructor() {
    super();
    this.state = { height: "3.3em" };
  }

  countLines = () => {
    let height = this.testComp.offsetHeight;
    if ((height - 2) / 16 > 3.3) {
      this.setState({ showButton: true });
    }
  };
  showHide = () => {
    this.state.height == "auto"
      ? this.setState({ height: "3.3em" })
      : this.setState({ height: "auto" });
  };
  componentDidMount() {
    this.countLines();
  }
  render() {
    return (
      <div>
        <h1>Expandable text</h1>
        {this.state.showButton ? (
          <button onClick={this.showHide}>Show or Hide</button>
        ) : null}
        <div id="parrent" style={{ height: this.state.height }}>
          <div
            id="content"
            ref={(c) => (this.testComp = c)}
            style={{ height: "auto" }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Expandable;
