import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IdentifiedWebsiteUsabilityIssuesPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E8_Weakness/Identified_Website_usability_issues/")
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
      {data.charts && data.charts.pagespeed_chart && (
        <div className="mb-6">
          <img
            src={data.charts.pagespeed_chart}
            alt="PageSpeed Chart"
            className="w-full max-w-xl mx-auto border rounded shadow"
          />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Metric</th>
              <th className="px-4 py-2 border">Desktop Score</th>
              <th className="px-4 py-2 border">Mobile Score</th>
              <th className="px-4 py-2 border">Mobile-Friendly Assessment</th>
              <th className="px-4 py-2 border">Component Score</th>
            </tr>
          </thead>
          <tbody>
            {data.table && data.table.map((row, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-4 py-2 border">{row.Metric}</td>
                <td className="px-4 py-2 border">{row["Desktop Score"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Mobile Score"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Mobile-Friendly Assessment"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Component Score"] ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        <span>Metrics Analyzed: {data.meta?.metrics_analyzed}</span>
        {data.meta?.generated_on && (
          <span className="ml-4">Generated: {data.meta.generated_on}</span>
        )}
      </div>
    </div>
  );
};

export default IdentifiedWebsiteUsabilityIssuesPage; 