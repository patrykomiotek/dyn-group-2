import { useState, useEffect } from "react";

function getSize() {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  };
}

export function useViewPort() {
  const [size, setSize] = useState(getSize());
  // const [cellA, setCellA] = useState();

  // mounting, updating, unmounting
  useEffect(() => {
    // mounting or updating
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    // unmounting
    return () => {
      // listeners
      // sockets
      // streams
      // server-side events
      // timers
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   // mounting or updating
  //   // logic only for cellA change
  // }, [cellA]); --> useUserData

  return size;
}
