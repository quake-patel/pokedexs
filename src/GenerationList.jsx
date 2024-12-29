import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GenerationItem from "./component/GenerationItem";
import Header from "./component/Header";
import PokCard from "./component/pokCard";
import Pagination from "./component/Pagination";

const GenerationList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [totalPages, setTotalPages] = useState(0);
  // const [page, setPage] = useState(1);
  // const [test, setTest] = useState(21);
  // const limit = 21;
  // const firstPageOffset = 3;
  // const offset = (page - 1) * limit;
  // const firstPage = page <= firstPageOffset ? page - 1 : firstPageOffset;
  // const firstPok = () => {
  //   axios
  //     .get(
  //       `https://pokeapi.co/api/v2${location.pathname}?offset=${offset}&limit=${limit}`
  //     )
  //     .then(({ data }) => {
  //       setPokemonList(data.results);
  //     });
  // };
  // const lastPok = () => {
  //   axios
  //     .get(
  //       `https://pokeapi.co/api/v2${location.pathname}?offset=${offset}&limit=${limit}`
  //     )
  //     .then(({ data }) => {
  //       setPokemonList(data.results);
  //     });
  // };

  const location = useLocation();
  const url = `https://pokeapi.co/api/v2/generation/${id}`;

  const [pokemons, setPokemons] = useState([]);
  const [firstNumber, setFirstNumber] = useState(0); //pagination
  const [lastNumber, setLastNumber] = useState(10); //pagination
  useEffect(() => {
    if (!url) {
      navigate("/");
    }
    axios.get(url).then(({ data }) => {
      setPokemons(data.pokemon_species);
    });
  }, [url]);

  //pagination
  const [currentPage, setcurrentPage] = useState(1);
  const itemPerPage = 10;
  const numberOfPage = Math.ceil(pokemons.length / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);
  //pagination
  const handelChange = (item) => {
    setcurrentPage(item);
    setFirstNumber((item - 1) * itemPerPage);
    setLastNumber(item * itemPerPage);
  };
  const handelFirst = () => {
    setFirstNumber(0);
    setLastNumber(10);
  };
  const handelLast = () => {
    setFirstNumber(0);
    setLastNumber(10);
  };
  return (
    <>
      <Header />
      <div className="generation-list">
        <div className="pokemon-list-item-inner">
          {pokemons &&
            pokemons
              .slice(firstNumber, lastNumber)
              .map((item, index) => (
                <PokCard key={index} pokemon={item.name} />
              ))}
        </div>
      </div>
      <Pagination
        pageIndex={pageIndex}
        currentPage={currentPage}
        numberOfPage={numberOfPage}
        handelChange={handelChange}
        handelFirst={handelFirst}
        handelLast={handelLast}
      />
    </>
  );
};
export default GenerationList;
