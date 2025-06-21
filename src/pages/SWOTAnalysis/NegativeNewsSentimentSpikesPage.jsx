import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NegativeNewsSentimentSpikesPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/E10_Weakness/Negative_News_Sentiment_Spikes/")
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
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Negative News Sentiment Spikes</h2>
      {data.visualizations && data.visualizations.sentiment_distribution && (
        <div className="mb-6">
          <img
            src={data.visualizations.sentiment_distribution}
            alt="Sentiment Distribution"
            className="w-full max-w-xl mx-auto border rounded shadow"
          />
        </div>
      )}
      <div className="overflow-x-auto mb-6">
        <h3 className="font-semibold mb-2 text-purple-700">Sentiment Distribution</h3>
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Overall Sentiment</th>
              <th className="px-4 py-2 border">Count</th>
              <th className="px-4 py-2 border">Percentage</th>
              <th className="px-4 py-2 border">Avg. Sentiment Score</th>
            </tr>
          </thead>
          <tbody>
            {data.analysis_results && data.analysis_results.sentiment_distribution &&
              Object.entries(data.analysis_results.sentiment_distribution).map(([sentiment, row], idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2 border">{sentiment}</td>
                  <td className="px-4 py-2 border">{row.Count}</td>
                  <td className="px-4 py-2 border">{row.Percentage}</td>
                  <td className="px-4 py-2 border">{row["Avg. Sentiment Score"]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto mb-6">
        <h3 className="font-semibold mb-2 text-purple-700">Negative Headlines</h3>
        <table className="min-w-[400px] bg-white border border-gray-200 rounded shadow">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 border">Headline</th>
              <th className="px-4 py-2 border">Sentiment Score (-1 to +1)</th>
            </tr>
          </thead>
          <tbody>
            {data.analysis_results && data.analysis_results.negative_headlines &&
              data.analysis_results.negative_headlines.map((row, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2 border">{row.Headline}</td>
                  <td className="px-4 py-2 border">{row["Sentiment Score (-1 to +1)"]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NegativeNewsSentimentSpikesPage; 