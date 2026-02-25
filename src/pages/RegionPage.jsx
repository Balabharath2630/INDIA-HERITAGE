import { useParams, useNavigate } from "react-router-dom";
import regionsData from "../Data/regionsData";
import "../pages/Monuments.css";

function RegionPage() {
  const { regionId } = useParams();
  const navigate = useNavigate();

  if (!regionId) return null;

  const formattedRegion =
    regionId.charAt(0).toUpperCase() + regionId.slice(1).toLowerCase();

  const places = regionsData[formattedRegion];

  if (!places) return null;

  return (
    <div className="region-page-wrapper">
      <h2 className="monuments-title">
        Monuments & Culture — {formattedRegion} India
      </h2>

      <div className="monuments-grid">
        {places.map((place) => (
          <div key={place.id} className="monument-card">
            <img src={place.image} alt={place.name} />

            <div className="monument-info">
              <h3>{place.name}</h3>
              <p>{place.location}</p>

              <button
                onClick={() => navigate(`/monuments/${place.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegionPage;