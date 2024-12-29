import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img
          src={"https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"}
          alt=""
        />
      </Link>
    </div>
  );
};
export default Logo;
