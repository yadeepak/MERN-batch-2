import React, { Component } from "react";
export const HigherOrderComponent = (OriginalComponent) => {
  return class HigherOrderComponent extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0,
      };
    }

    handleClick = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    render() {
      return (
        <main>
          <OriginalComponent
            counter={this.state.counter}
            handleClick={this.handleClick}
          />
        </main>
      );
    }
  };
};
