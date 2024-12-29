import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="mob-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemons</Link>
        </li>
        <li>Name</li>
        <li>Movies</li>
        <li>Ranks</li>
      </ul>
      <Search />
    </nav>
  );
};
export default Nav;
