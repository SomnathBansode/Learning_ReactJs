import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="px-10 py-5 rounded-md bg-emerald-700 border-0 m-3 font-bold text-white"
      >
        You clicked on button <span className="text-blue-500">{count}</span>{" "}
        times
      </button>
    </React.Fragment>
  );
};

export default Counter;
