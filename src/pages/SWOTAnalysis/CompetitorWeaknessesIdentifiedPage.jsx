import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CompetitorWeaknessesIdentifiedPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E14_Opportunities/Competitor_Weaknesses_Identified/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <button
        className="mb-6 px-4 py-2 bg-purple-200 hover:bg-purple-300 rounded shadow"
        onClick={() => navigate(-1)}
      >
        Back to SWOT Analysis
      </button>
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Competitor Weaknesses Identified</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Competitor</th>
              <th className="px-4 py-2 border">Total Opportunity Score</th>
              <th className="px-4 py-2 border">Primary Weaknesses</th>
              <th className="px-4 py-2 border">Recommended Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            {data.analysis_results && data.analysis_results.kpi_table &&
              data.analysis_results.kpi_table.map((row, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2 border">{row["Competitor"]}</td>
                  <td className="px-4 py-2 border">{row["Total Opportunity Score"]}</td>
                  <td className="px-4 py-2 border">{row["Primary Weaknesses"]}</td>
                  <td className="px-4 py-2 border">{row["Recommended Focus Areas"]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitorWeaknessesIdentifiedPage; 