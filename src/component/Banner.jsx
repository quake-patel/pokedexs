import { Link } from "react-router-dom";

const Banner = ({ title, about, button }) => {
  return (
    <div className="banner">
      <div className="banner-title">
        <h1>{title}</h1>
        <p>{about}</p>
        <button>
          <Link to={button}>{button}</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
