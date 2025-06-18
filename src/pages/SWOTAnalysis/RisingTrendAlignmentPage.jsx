import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RisingTrendAlignmentPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E12_Opportunities/Rising_Trend_Alignment/")
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
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Rising Trend Alignment</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Trend Category</th>
              <th className="px-4 py-2 border">Search Growth (%)</th>
              <th className="px-4 py-2 border">Industry Focus</th>
              <th className="px-4 py-2 border">Composite Score</th>
              <th className="px-4 py-2 border">Priority</th>
            </tr>
          </thead>
          <tbody>
            {data.analysis_results && data.analysis_results.data_table &&
              data.analysis_results.data_table.map((row, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2 border">{row["Trend Category"]}</td>
                  <td className="px-4 py-2 border">{row["Search Growth (%)"]}</td>
                  <td className="px-4 py-2 border">{row["Industry Focus"]}</td>
                  <td className="px-4 py-2 border">{row["Composite Score"]}</td>
                  <td className="px-4 py-2 border">{row["Priority"]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {data.analysis_results && data.analysis_results.key_takeaways && (
        <div className="bg-purple-100 p-4 rounded shadow mb-4">
          <h3 className="font-semibold mb-2 text-purple-700">Key Takeaways</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {data.analysis_results.key_takeaways.map((item, idx) => (
              <li key={idx} className="mb-1 whitespace-pre-line">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RisingTrendAlignmentPage; 