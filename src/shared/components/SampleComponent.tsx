import { useState } from "react";

export const SampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <span>Count {count}</span>
      <div>
        <button
          className="bg-slate-700 text-slate-300 p-2"
          onClick={() => setCount((value) => value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
