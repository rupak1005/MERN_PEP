import React, { createContext } from "react";
import { useState } from "react";

const userContext = createContext();
function Context(props) {
  const [user, setuser] = useState([
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
    { id: 3, name: "Alice Doe", age: 35 }
  ]);
  return (
    <div>
      <userContext.Provider value={{ user, setuser }}>
        {props.children}
      </userContext.Provider>
    </div>
  );
}

export default Context;
export { userContext };
