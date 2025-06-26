import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="h-[100vh] min-w-screen flex" >
    <div className="p-8 m-auto flex flex-col items-center justify-center w-[30vw] h-64 bg-slate-200 rounded-lg shadow-md">
      <h1 className="mb-6 px-8 py-4 text-4xl font-bold rounded-full bg-rose-200 text-slate-800 shadow" id="counter">
        {count}
      </h1>
      <div className="flex gap-4">
        <button
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-full shadow transition"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-2 rounded-full shadow transition"
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
  );
}

export default Counter;
