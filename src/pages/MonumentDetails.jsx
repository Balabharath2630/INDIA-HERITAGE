import { useParams, useNavigate } from "react-router-dom";
import monuments from "../Data/monuments";
import "./MonumentDetails.css";

function MonumentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const monument = monuments.find((item) => item.id === parseInt(id));

  if (!monument) {
    return <h2>Monument not found</h2>;
  }

  return (
    <div className="details-page">
      
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="details-container">
        
        <img src={monument.image} alt={monument.name} />

        <div className="details-content">
          <h1>{monument.name}</h1>
          <h3>📍 {monument.location}</h3>

          <div className="meta-info">
            <span>⭐ {monument.rating}</span>
            <span>🏛 {monument.category}</span>
            <span>📅 Built: {monument.year}</span>
            {monument.virtualTour && <span className="virtual">🎥 Virtual Tour Available</span>}
          </div>

          <p>{monument.description}</p>

          <button className="explore-btn">Start Exploring 🚀</button>
        </div>
      </div>

    </div>
  );
}

export default MonumentDetails;