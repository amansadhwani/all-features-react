import React, { useEffect, useState, useRef } from "react";

// import "./AutoComplete.css";

const App = () => {
  const [display, setDisplay] = useState(false);
  const options = [{ name: "india" },{name:"pakistan"},{name:"iran"},{name:"indiana"}];
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = (poke) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

function AutoComplete() {
  return (
    <div className="App">
      <h1>Custom AutoComplete React</h1>

      <div className="auto-container">
        <App />
      </div>
    </div>
  );
}

export default AutoComplete;
