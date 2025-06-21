import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LowerEngagementRateVsSelectCompetitorsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E7_Weakness/Lower_Engagement_Rate_vs_Select_Competitors/")
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
      <h2 className="text-2xl font-bold mb-4 text-purple-800">{data.kpi}</h2>
      {data.charts && data.charts.engagement_rate_chart && (
        <div className="mb-6">
          <img
            src={data.charts.engagement_rate_chart}
            alt="Engagement Rate Chart"
            className="w-full max-w-xl mx-auto border rounded shadow"
          />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Company</th>
              <th className="px-4 py-2 border">Followers</th>
              <th className="px-4 py-2 border">Avg Likes/Post</th>
              <th className="px-4 py-2 border">Avg Comments/Post</th>
              <th className="px-4 py-2 border">Engagement Rate (%)</th>
              <th className="px-4 py-2 border">Bounce Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.table && data.table.map((row, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-4 py-2 border">{row.Company}</td>
                <td className="px-4 py-2 border">{row["Followers"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Avg Likes/Post"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Avg Comments/Post"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Engagement Rate (%)"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Bounce Rate (%)"] ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LowerEngagementRateVsSelectCompetitorsPage; 