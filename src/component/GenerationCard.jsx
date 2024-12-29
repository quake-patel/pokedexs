import { Link } from "react-router-dom";

const GenerationCard = ({ index, generation, img }) => {
  return (
    <Link to={`/generation/${index}`} className="generation-card">
      <div className="generation-card-inner">
        <div className="generation-card-inner-img">
          <img src={img} alt="Loading..." />
        </div>
        <div className="generation-card-inner-title">
          <h2>{generation}</h2>
        </div>
      </div>
    </Link>
  );
};

export default GenerationCard;
