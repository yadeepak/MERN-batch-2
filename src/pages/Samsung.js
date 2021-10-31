import React from "react";

export default function Samsung(props) {
  console.log(props);
  const { modelNo } = props.params.match.params;
  return <h1>Samsung {modelNo} </h1>;
}
