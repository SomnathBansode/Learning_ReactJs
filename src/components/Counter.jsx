//use of usestate
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickSaprate = () => {
    setCount(count + 1);
  };

  const btn = (
    <button
      onClick={() => {
        handleClick();
      }}
      className="px-10 py-5 rounded-md bg-emerald-700 border-0 m-3 font-bold text-white"
    >
      You clicked on button <span className="text-blue-500">{count}</span> times
    </button>
  );

  return (
    <React.Fragment>
      <div>
        <h1 className="font-bold text-3xl text-center text-white">
          Counters that update together
        </h1>
        <div className="flex justify-between items-center flex-wrap ">
          {btn}
          {btn}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
