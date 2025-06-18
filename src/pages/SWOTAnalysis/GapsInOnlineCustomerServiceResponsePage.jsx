import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GapsInOnlineCustomerServiceResponsePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E9_Weakness/Gaps_in_Online_Customer_Service_Response/")
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
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Gaps in Online Customer Service Response</h2>
      {data.visualization && (
        <div className="mb-6">
          <img
            src={data.visualization}
            alt="Customer Service Response Visualization"
            className="w-full max-w-xl mx-auto border rounded shadow"
          />
        </div>
      )}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Platform</th>
              <th className="px-4 py-2 border">No. of Reviews Checked</th>
              <th className="px-4 py-2 border">Response Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.data && data.data.map((row, idx) => (
              <tr key={idx} className="text-center">
                <td className="px-4 py-2 border">{row.Platform}</td>
                <td className="px-4 py-2 border">{row["No. of Reviews Checked"] ?? "-"}</td>
                <td className="px-4 py-2 border">{row["Response Rate (%)"] ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.analysis && (
        <div className="bg-purple-100 p-4 rounded shadow mb-4">
          <h3 className="font-semibold mb-2 text-purple-700">Analysis Summary</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Highest Response Rate: {data.analysis.highest_response_rate}%</li>
            <li>Lowest Response Rate: {data.analysis.lowest_response_rate}%</li>
            <li>Response Rate Gap: {data.analysis.response_rate_gap}%</li>
            <li>Lowest Response Platforms: {data.analysis.lowest_response_platforms?.join(", ")}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GapsInOnlineCustomerServiceResponsePage; 