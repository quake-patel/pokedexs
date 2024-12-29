import Banner from "./component/Banner";
import Header from "./component/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokCard from "./component/pokCard";
// import Pagination from "./component/Pagination";
import { current } from "@reduxjs/toolkit";

const Pokemon = () => {
  const allPokemon = "pokemon";
  const navigate = useNavigate();

  const [firstNumber, setFirstNumber] = useState(0); //pagination
  const [lastNumber, setLastNumber] = useState(21); //pagination
  const limit = 100000;
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 21;
  const numberOfPage = Math.ceil(limit / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);
  const url = `https://pokeapi.co/api/v2/${allPokemon}?offset=${firstNumber}&limit=21`; //${offset} ${limit}

  const [pokemons, SetPokemons] = useState([]);
  useEffect(() => {
    if (!url) {
      navigate("/");
    }
    axios.get(url).then(({ data }) => {
      SetPokemons(data.results);
    });
  }, [url]);

  const handelChange = (index) => {
    setcurrentPage(index);
    setFirstNumber((index - 1) * itemPerPage);
    setLastNumber(index * itemPerPage);
  };
  return (
    <div className="pokemon-list">
      <Header />
      <Banner
        title="Pokemon List"
        about="Pokemon a Pokémon's name to see its detailed Pokédex page, or click a type to see other pokemon of the same type."
        button="Home"
      />
      <section className="pokemon-list-item">
        <div className="container">
          <div className="pagination-wrapper">
            {pageIndex
              .slice(
                Math.max(0, currentPage - 3),
                Math.min(numberOfPage, currentPage + 3)
              )
              .map((index) => (
                <h1 onClick={() => handelChange(index)} key={index}>
                  {index}
                </h1>
              ))}
          </div>
          <div className="pokemon-list-item-inner">
            {pokemons.map((item, index) => {
              return <PokCard key={index} pokemon={item.name} />;
            })}
          </div>
        </div>
      </section>
      {/* <Pagination currentPage={currentPage} /> */}
    </div>
  );
};
export default Pokemon;
