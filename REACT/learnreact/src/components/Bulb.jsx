import React, { useState } from "react";

function Bulb() {
  const [bulbOn, setBulbOn] = useState([false, false, false, false, false]);
console.log("rentered")
  function toggle(ind) {
    setBulbOn(prevState => {
      const newState = [...prevState];
      newState[ind] = !newState[ind];
      return newState;
    });
  }

  return (
    <div>
      <div className="grid grid-cols-5">
        {bulbOn.map((isOn, ind) => (
          <img className="h-[100px] min-w-[100px] cursor-pointer object-cover"
            key={ind}
            src={
              isOn
                ? "https://www.citypng.com/public/uploads/preview/transparent-hd-real-light-bulb-704081695125968fldw2x56hs.png"
                : "https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?semt=ais_hybrid&w=740"
            }
            alt={isOn ? "Bulb On" : "Bulb Off"}
            style={{ width: "60px", margin: "10px" }}
            onClick={() => toggle(ind)}
          />
          
        ))}
        {bulbOn.map((isOn, ind) => (
            <button className="p-3 m-2  border-amber-100 bg-amber-400 border rounded-3xl" onClick={()=>toggle(ind)}>click here</button>
          ))}
        
      </div>
    </div>
  );
}

export default Bulb;