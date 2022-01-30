import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import About from "./About";
export default function ContactUs() {
  const [counter, setCounter] = useState(0);
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [shouldShowAboutSection, setVisibiltyOfAboutSection] = useState(true);
  const h1Ref = useRef(null);
  const handleClick = () => {
    setCounter(counter + 1);
    setVisibiltyOfAboutSection(!shouldShowAboutSection);
  };

  // useEffect(() => {
  //   console.log("hello");
  //   // return () => {
  //   //   console.log("bye");
  //   // };
  // });

  useEffect(() => {
    console.log("hello");
    setCounter(counter + 10);
  }, [shouldShowAboutSection]);

  useEffect(() => {
    console.log(h1Ref.current);
    h1Ref.current.focus();
    h1Ref.current.value = "1000";
  }, []);

  const calculate = useMemo(() => {
    console.log("calculate-----");
    return a + b;
  }, [a, b]);
  React.useLayoutEffect(() => {
    alert();
  });
  return (
    <div>
      <input ref={h1Ref} type="text" />
      {/* <h1>{counter}</h1> */}
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <div>{calculate}</div>

      {shouldShowAboutSection ? <About /> : ""}
    </div>
  );
}
