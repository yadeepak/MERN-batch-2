import React from "react";
class Section extends React.Component {
  componentWillUnmount() {
    console.log("comp unmounted");
    this.props.parameterFun();
  }
  render() {
    return <h1>Section</h1>;
  }
}
export default Section;
