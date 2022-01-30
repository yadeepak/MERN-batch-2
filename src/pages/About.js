import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    return () => console.log("by by about section");
  });
  return <h1>About us</h1>;
}
