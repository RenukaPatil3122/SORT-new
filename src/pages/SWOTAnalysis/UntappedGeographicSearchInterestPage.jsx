import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UntappedGeographicSearchInterestPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E15_Opportunities/Untapped_Geographic_Search_Interest/")
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
      <h2 className="text-2xl font-bold mb-4 text-purple-800">{data.kpi || 'Untapped Geographic Search Interest'}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Region/City</th>
              <th className="px-4 py-2 border">Region Type</th>
              <th className="px-4 py-2 border">Relative Search Interest</th>
              <th className="px-4 py-2 border">Current Penetration (%)</th>
              <th className="px-4 py-2 border">Opportunity Score</th>
              <th className="px-4 py-2 border">Priority</th>
            </tr>
          </thead>
          <tbody>
            {data.table && data.table.map((row, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-4 py-2 border">{row["Region/City"]}</td>
                <td className="px-4 py-2 border">{row["Region Type"]}</td>
                <td className="px-4 py-2 border">{row["Relative Search Interest"]}</td>
                <td className="px-4 py-2 border">{row["Current Penetration (%)"]}</td>
                <td className="px-4 py-2 border">{row["Opportunity Score"]}</td>
                <td className="px-4 py-2 border">{row["Priority"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.insights && (
        <div className="bg-purple-100 p-4 rounded shadow mb-4">
          <h3 className="font-semibold mb-2 text-purple-700">Insights</h3>
          {data.insights.top_5_opportunity_markets && (
            <div className="mb-2">
              <strong>Top 5 Opportunity Markets:</strong>
              <ul className="list-disc pl-6 text-gray-700">
                {data.insights.top_5_opportunity_markets.map((item, idx) => (
                  <li key={idx}>{item["Region/City"]} (Score: {item["Opportunity Score"]})</li>
                ))}
              </ul>
            </div>
          )}
          {data.insights.strategic_recommendations && (
            <div className="mb-2">
              <strong>Strategic Recommendations:</strong>
              <ul className="list-disc pl-6 text-gray-700">
                {data.insights.strategic_recommendations.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {data.insights.quick_wins && (
            <div className="mb-2">
              <strong>Quick Wins:</strong>
              <ul className="list-disc pl-6 text-gray-700">
                {data.insights.quick_wins.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {data.insights.long_term_opportunities && (
            <div className="mb-2">
              <strong>Long Term Opportunities:</strong>
              <ul className="list-disc pl-6 text-gray-700">
                {data.insights.long_term_opportunities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="mt-4 text-gray-500 text-sm">
        <span>Total Markets Evaluated: {data.meta?.total_markets_evaluated}</span>
        {data.meta?.date_generated && (
          <span className="ml-4">Generated: {data.meta.date_generated}</span>
        )}
      </div>
    </div>
  );
};

export default UntappedGeographicSearchInterestPage; 