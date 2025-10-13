import { useState, useRef } from "react";
import { Button } from "shared/ui";

export function ValueCollector() {
  const [count, setCount] = useState(0);

  const contRef = useRef(0);
  let countVar = 0;

  const handleStateChange = () => {
    setCount((prevValue) => prevValue + 1);
  };
  const handleRefValueChange = () => {
    contRef.current = contRef.current + 1;
    console.log({ countRef: contRef.current });
  };
  const handleVarChange = () => {
    countVar++;
    console.log({ countVar: countVar });
  };

  return (
    <div className="space-y-2">
      <p>
        Count (state): {count}, Count (ref): {contRef.current}, Count (var):{" "}
        {countVar}
      </p>
      <div className="space-x-2">
        <Button onClick={handleStateChange}>State</Button>
        <Button onClick={handleRefValueChange}>Ref</Button>
        <Button onClick={handleVarChange}>Var</Button>
      </div>
    </div>
  );
}
