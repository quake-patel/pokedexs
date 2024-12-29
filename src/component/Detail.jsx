import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Attak from "./Attak";

const Detail = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch(() => {
        setPokemon(undefined);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [name]);
  const detailsImg = useMemo(() => {
    if (pokemon?.sprites?.other["official-artwork"].front_default) {
      return pokemon.sprites.other["official-artwork"].front_default;
    }
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png";
  });
  return (
    <>
      <Header />
      <div className="margin">
        <div className="container">
          <div className="detail">
            <div className="detail-inner">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                <>
                  <div className="detail-image">
                    <img src={detailsImg} alt="" />
                  </div>
                  <div className="details-part">
                    {pokemon ? (
                      <>
                        <h2>{pokemon.name}</h2>
                        <h5>Height: {pokemon.height} ft</h5>
                        <h5>Weight: {pokemon.weight} kg</h5>
                        <h5>Rank: {pokemon.order}</h5>
                        <h5>
                          Type:{" "}
                          {pokemon.types
                            ?.map((item) => item.type.name)
                            .join(", ")}
                        </h5>
                        <Attak attak={pokemon} />
                      </>
                    ) : (
                      <h2>No Data</h2>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
