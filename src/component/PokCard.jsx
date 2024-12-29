import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PokCard = ({ pokemon }) => {
  const [pokCard, setPokCard] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(({ data }) => setPokCard(data))
      .finally(() => {
        setLoading(false);
      });
  }, [pokemon]);

  // const pokemonUrl = useMemo(() => {
  //   if (pokCard.sprites?.other && pokCard.sprites?.other["official-artwork"]) {
  //     return pokCard.sprites?.other["official-artwork"].front_default;
  //   }
  //   return "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png";
  // }, [pokCard]);

  const pokemonImg = useMemo(() => {
    if (
      !isLoading &&
      pokCard.sprites &&
      pokCard.sprites?.other[`official-artwork`]?.front_default
    ) {
      return pokCard.sprites?.other[`official-artwork`].front_default;
    }
    return "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png";
  }, [pokCard, isLoading]);

  return (
    <Link to={`/pokemon/${pokCard.name}`} className="pokemon-card">
      <div className="pokemon-card-inner">
        <div className="pokemon-card-inner-img">
          <img src={pokemonImg} alt="" />
        </div>
        <h4>Name: {!isLoading && pokCard.name}</h4>
        <div className="pokemon-card-inner-details">
          <div className="pokemon-card-inner-details-inner">
            <p>Rank: {!isLoading && pokCard.order}</p>
            <p>Weight: {!isLoading && pokCard.weight}</p>
          </div>
          <div className="pokemon-card-inner-details-inner">
            <p>Height: {!isLoading && pokCard.height} ft</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PokCard;
