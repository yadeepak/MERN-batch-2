import React from "react";
import { HigherOrderComponent } from "./HigherOrderComponent";
class Counter2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter 2</h1>
        <p>{this.props.counter}</p>
        <button onClick={this.props.handleClick}>
          click to update counter2
        </button>
      </div>
    );
  }
}

export default HigherOrderComponent(Counter2);
