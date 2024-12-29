import axios from "axios";
import { useEffect, useState } from "react";

const GenerationItem = ({ card }) => {
  //   const [isLoading, setLoading] = useState(false);

  const [pokemon, setPokemon] = useState();
  const urlData = `https://pokeapi.co/api/v2/pokemon/${card}`;
  useEffect(() => {
    axios.get(urlData).then(({ data }) => setPokemon(data));
  }, [urlData]);

  //   const pokemonImg = useMemo(() => {
  //     if (
  //       !isLoading &&
  //       pokemon.sprites &&
  //       pokemon.sprites?.other[`official-artwork`]?.front_default
  //     ) {
  //       return pokemon.sprites?.other[`official-artwork`].front_default;
  //     }
  //     return "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png";
  //   }, [pokemon, isLoading]);

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-inner">
        <div className="pokemon-card-inner-img">
          <img
            src={
              pokemon &&
              pokemon.sprites?.other[`official-artwork`]?.front_default
            }
            alt=""
          />
        </div>
        <h4>Name: {pokemon && pokemon.name}</h4>
        <div className="pokemon-card-inner-details">
          <div className="pokemon-card-inner-details-inner">
            <p>Rank: {pokemon && pokemon.order}</p>
            <p>Weight: {pokemon && pokemon.weight}</p>
          </div>
          <div className="pokemon-card-inner-details-inner">
            <p>Height: {pokemon && pokemon.height} ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationItem;
