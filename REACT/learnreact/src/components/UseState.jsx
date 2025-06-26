import React, { useRef, useState } from 'react';

function UseState() {
  const [string, setString] = useState("rupak");
  const inputref=useRef(null);

  function changename() {
    
    setString(inputref.current.value);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-slate-300 p-8">
      <h1 className="mb-6 px-6 py-3 rounded bg-rose-200 text-2xl font-semibold shadow">
        <span>Hello {string}</span>
      </h1>
      <input
        type="text"
        placeholder="Change name"
        id="input"
        className="mb-4 px-4 py-2 rounded border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
      ref={inputref} />
      <button
        className="px-6 py-2 bg-sky-400 text-white rounded-full shadow hover:bg-sky-500 transition"
        onClick={changename}
      >
        Change name
      </button>
    </div>
  );
}

export default UseState;