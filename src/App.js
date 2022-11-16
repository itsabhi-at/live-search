import React, { useState } from "react";
import { data } from "./data";

function App() {
  // use state
  const [megaState, setMegaState] = useState({
    InputValue: "",
    data: [],
  });
  // functions
  const liveSearch = (query) => {
    if (query.length <= 0) {
      setMegaState({ InputValue: query, data: [] });
      return;
    }
    setMegaState({ InputValue: query, data: data });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="from" className="text-xl font-medium py-4">
        From
      </label>
      <input
        className="py-2 px-2 bg-white-two capitalize"
        name="from"
        type="text"
        onChange={(e) => liveSearch(e.target.value)}
        value={megaState.InputValue}
        placeholder="Enter Station Name"
      />
      {megaState.data.length !== 0 && (
        <div className="relative transition-all delay-300 ease-in-out">
          <ul className="absolute border border-black rounded-b-lg w-full ">
            {megaState.data.map((city) => (
              <li
                onClick={() => {
                  setMegaState({
                    // InputValue: city.stationName,
                    // data: [],
                    data: [],
                    InputValue: `${
                      city.stationName
                    } - ${city.stationCode.toUpperCase()}`,
                  });
                }}
                className="p-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                key={city.stationCode}
              >
                {city.stationName} , {city.stationCode}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
