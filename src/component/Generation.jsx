import { useEffect, useState } from "react";
import GenerationCard from "./GenerationCard";
import axios from "axios";

const Generation = () => {
  const [generation, SetGeneration] = useState();

  const img = [
    "https://www.gamespot.com/a/uploads/scale_super/1601/16018044/4056259-gen-one-pokemon.jpg",
    "https://i.pinimg.com/originals/c9/47/62/c947620557052453c710cb1815f26f8a.jpg",
    "https://www.justwatch.com/images/backdrop/300686885/s640/season-3/season-3",
    "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1478528000752-K2M9374QHOB3A0XTZ2FQ/image-asset.jpeg?format=1500w",
    "https://www.gamespot.com/a/uploads/scale_super/1601/16018044/4056259-gen-one-pokemon.jpg",
    "https://www.gamespot.com/a/uploads/scale_super/1601/16018044/4056259-gen-one-pokemon.jpg",
    "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1478528000752-K2M9374QHOB3A0XTZ2FQ/image-asset.jpeg?format=1500w",
    "https://www.gamespot.com/a/uploads/scale_super/1601/16018044/4056259-gen-one-pokemon.jpg",
    "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1478528000752-K2M9374QHOB3A0XTZ2FQ/image-asset.jpeg?format=1500w",
  ];

  const url = "https://pokeapi.co/api/v2/generation/";

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      SetGeneration(data.results);
    });
  }, [url]);

  return (
    <section className="pokemon-generation">
      <div className="pokemon-generation-inner">
        {generation &&
          generation.map((item, index) => (
            <GenerationCard
              key={index}
              generation={item.name}
              img={img[index]}
              index={index + 1}
            />
          ))}
      </div>
    </section>
  );
};

export default Generation;
