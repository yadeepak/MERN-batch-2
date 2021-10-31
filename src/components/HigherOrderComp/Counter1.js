import React from "react";
import { HigherOrderComponent } from "./HigherOrderComponent";

class Counter1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter 1</h1>
        <p>{this.props.counter}</p>
        <button onClick={this.props.handleClick}>
          click to update counter
        </button>
      </div>
    );
  }
}

export default HigherOrderComponent(Counter1);
