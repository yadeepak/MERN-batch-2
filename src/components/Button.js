import React from "react";
export default class Button extends React.Component {
  state = {
    num: 10,
  };
  render() {
    return (
      <button onClick={() => this.props.handleCounter(this.state.num)}>
        Click me
      </button>
    );
  }
}
