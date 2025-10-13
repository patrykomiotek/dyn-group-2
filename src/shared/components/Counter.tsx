import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounting / updating");
    const id = setInterval(() => {
      setCount((prevValue) => prevValue + 1);
    }, 1000);

    return () => {
      console.log("unmounting");
      clearInterval(id);
    };
  }, []);

  return <div>Count: {count}</div>;
}
