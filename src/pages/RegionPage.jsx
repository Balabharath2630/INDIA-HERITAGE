import { useParams, Link } from "react-router-dom";

function RegionPage() {
  const { regionId } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back</Link>
      <h1>Welcome to {regionId} India</h1>
    </div>
  );
}

export default RegionPage;