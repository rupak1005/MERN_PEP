import React, { useState } from 'react';

function Button({name}) {
  const [val, setVal] = useState({ name: "rupak", isbanned: true, city: "delhi" });

  return (
    <div className="p-4 bg-blue-50 mt-5">
      <h1>name: {name}</h1>
      <h1>isbanned: {val.isbanned.toString()}</h1>
      <h2>city: {val.city}</h2>
      <button
        className="bg-blue-500 p-3 m-2 border-none"
        onClick={() => setVal({ ...val, isbanned: !val.isbanned })}
      >
        click here
      </button>
    </div>
  );
}

export default Button;