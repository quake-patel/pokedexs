import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        const names = response.data.results.map((pokemon) => pokemon.name);
        setFilterData(names);
      });
  }, [url]);

  const inputRef = useRef();

  const navigate = useNavigate();

  const handleClick = (value) => {
    navigate("/pokemon/" + value);
    inputRef.current.value = "";
    setData([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      const value = inputRef.current?.value.toLowerCase();
      if (value) {
        handleClick(value);
      }
    }
  };

  const searchResult = (value) => {
    if (value) {
      setData(filterData.filter((pokemon) => pokemon.includes(value)));
    } else {
      setData([]);
    }
  };

  return (
    <div className="search">
      <div className="search-menu">
        <label className="burger">
          <input id="burger" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <form className="input-container" onSubmit={handleSearch}>
          <input
            ref={inputRef}
            onChange={(e) => searchResult(e.target.value)}
            placeholder="Email Address"
            type="search"
          />
          <button className="invite-btn" type="submit">
            Invite
          </button>
        </form>
      </div>
      {data.length ? (
        <div className="search-result">
          <ul>
            {data.map((name) => (
              <li key={name} onClick={() => handleClick(name)}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
