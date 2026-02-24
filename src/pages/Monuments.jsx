import { useNavigate } from "react-router-dom";
import monuments from "../Data/monuments";
import "./Monuments.css";

function Monuments() {
  const navigate = useNavigate();

  return (
    <div className="monuments-page">
      <h1>Monuments & Culture</h1>

      <div className="monument-grid">
        {monuments.map((item) => (
          <div
            key={item.id}
            className="monument-card"
            onClick={() => navigate(`/monuments/${item.id}`)}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.location}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monuments;