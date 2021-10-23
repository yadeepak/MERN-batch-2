import React from "react";
import Section from "./Section";

class Counter extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("did mount");
    this.setState({ count: this.state.count + 1 });
  }
  //   shouldComponentUpdate() {
  //     // console.log("SCU", this.state.count);
  //     // if (this.state.count === 3) {
  //     //   return false;
  //     // }
  //     // return true;
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDUPDate", this.state.count, prevState.count);
    if (this.state.count === 3) {
      this.setState({ count: this.state.count + 1 });
    }
  }

  //   parameterFun() {
  //     console.log(this);
  //     // this.setState({ count: this.state.count + 1 });
  //   }

  parameterFun = (a, b, c) => {
    console.log(a, b, c);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render", this);
    return (
      <>
        {this.state.count === 4 ? (
          <></>
        ) : (
          <Section parameterFun={this.parameterFun} />
        )}
        <button onClick={() => this.parameterFun("", "", 1)} on>
          Hello
        </button>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default Counter;
