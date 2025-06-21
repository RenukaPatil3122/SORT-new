import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StrongEcommercePresenceRatingsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E4_Strength/Strong_Ecommerce_Presence/Ratings/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.analysis_results.data_table);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <button
        className="mb-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        onClick={() => navigate(-1)}
      >
        Back to SWOT Analysis
      </button>
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Strong E-commerce Presence/Ratings</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      {data && (
        <table className="w-full text-sm bg-white shadow rounded">
          <thead>
            <tr>
              <th className="border px-2 py-1">Brand</th>
              <th className="border px-2 py-1">E-commerce Presence</th>
              <th className="border px-2 py-1">No. of Reviews</th>
              <th className="border px-2 py-1">Rating Strength</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{row.Brand}</td>
                <td className="border px-2 py-1">{row["E-commerce Presence"]}</td>
                <td className="border px-2 py-1">{row["No. of Reviews"] ?? "N/A"}</td>
                <td className="border px-2 py-1">{row["Rating Strength"] ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StrongEcommercePresenceRatingsPage; 