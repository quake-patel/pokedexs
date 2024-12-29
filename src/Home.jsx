import { useEffect, useState } from "react";
import Banner from "./component/Banner";
import Header from "./component/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Generation from "./component/Generation";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/")
      .then(({ data }) => setPokemonList(data));
  }, []);

  return (
    <div className="home">
      <Header />
      <Banner
        title="Pokemon"
        about="This is the complete National Pokédex for Generation 9, which lists every one of the 1010 Pokémon discovered so far."
        button="Pokemon"
      />
      <main>
        <aside>
          <ul>
            {pokemonList &&
              Object.entries(pokemonList).map(([key, value]) => (
                <li key={key}>
                  <Link to={key} state={value}>
                    <strong>{key}</strong>
                  </Link>
                </li>
              ))}
          </ul>
        </aside>
        <Generation />
      </main>
    </div>
  );
};

export default Home;
