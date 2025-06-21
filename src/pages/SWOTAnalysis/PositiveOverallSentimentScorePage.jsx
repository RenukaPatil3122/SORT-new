import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PositiveOverallSentimentScorePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E2_Strength/Positive_Overall_Sentiment_Score/")
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
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Positive Overall Sentiment Score</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      {data && (
        <table className="w-full text-sm bg-white shadow rounded">
          <thead>
            <tr>
              <th className="border px-2 py-1">KPI</th>
              <th className="border px-2 py-1">Score</th>
              <th className="border px-2 py-1">Interpretation</th>
              <th className="border px-2 py-1">Positive %</th>
              <th className="border px-2 py-1">Negative %</th>
              <th className="border px-2 py-1">Neutral %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{row.KPI}</td>
                <td className="border px-2 py-1">{row.Score}</td>
                <td className="border px-2 py-1">{row.Interpretation}</td>
                <td className="border px-2 py-1">{row["Positive %"]}</td>
                <td className="border px-2 py-1">{row["Negative %"]}</td>
                <td className="border px-2 py-1">{row["Neutral %"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PositiveOverallSentimentScorePage; 