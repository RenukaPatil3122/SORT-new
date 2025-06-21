import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const apiMap = {
  "Haldiram Brand Association Strength (Specific Attributes)":
    "/H1-attribute-frequency",
  "Haldiram Sentiment Driver Analysis": "/H2-sentiment-breakdown",
  "Haldiram Campaign Effectiveness Correlation (Search/Social Buzz)":
    "/H3-sheet2-chart",
  "Haldiram Crisis Response Effectiveness": "/H4-doc-file",
  "Haldiram Owned Media Content Performance Variance": "/H5-chart",
  "Haldiram Website User Journey Friction Points (Inferred)": "/H6-data",
  "Haldiram Brand Personality Perception": "/H7-brand-personality-radar",
  "Haldiram Specific Product Performance Index (Reviews/Search)":
    "/H8-dashboard-image",
  "Haldiram Regional Perception Variance": "/H9-reviews",
  "Haldiram Employer Branding Index (Glassdoor/LinkedIn)":
    "/H10-comparison-full",
  "Haldiram CSR Initiative Impact/Resonance": "/H11-doc-file",
  "Haldiram Brand Evangelism Rate (Proxy)": "/H12-results",
  "Haldiram Website Conversion Funnel Bottleneck (Inferred)":
    "/H13-conversion-funnel",
  "Haldiram Cross-Promotion Effectiveness": "/H14-results",
  "Haldiram Nostalgia Factor Strength": "/H15-sheet2",
  "Haldiram Perceived Value for Money Score": "/H16-value-perception-charts",
  "Haldiram Online vs. Offline Perception Gap Signals": "/H17-sheet1",
  "Haldiram Influencer Collaboration Authenticity": "/H18-sheet5",
  "Haldiram 'Iconic' Product Status": "/H19-sheet1",
  "Haldiram Response to Negative Feedback Loop": "/H20-sheet2",
  "Haldiram Website Information Scent": "/H21-sheet1",
  "Haldiram Brand Mention Context Analysis (Beyond Sentiment)":
    "/H22-category-pie-chart",
  "Haldiram User-Generated Content Volume & Quality": "/H23-sheet1",
  "Haldiram Search Result Snippet Effectiveness": "/H24-qualitative-assessment",
  "Haldiram Brand Resilience Score (Post-Crisis Recovery)":
    "/H25-brand-resilience-score",
};

const KpiDetails = () => {
  const { kpiName } = useParams();
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [fileDownloadUrl, setFileDownloadUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = apiMap[decodeURIComponent(kpiName)];
    if (!endpoint) {
      setError("Invalid KPI selected or endpoint not mapped.");
      setLoading(false);
      return;
    }

    const fetchKPI = async () => {
      try {
        const response = await fetch(`http://localhost:3000${endpoint}`);

        if (!response.ok) {
          throw new Error("Failed to fetch KPI data");
        }

        const contentType = response.headers.get("content-type");

        if (contentType.includes("image/png")) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } else if (contentType.includes("application/json")) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setJsonData(data);
          } else if (data?.results) {
            setJsonData(data.results);
          } else if (data?.company_comparison) {
            setJsonData(data.company_comparison);
          } else {
            setError("No valid JSON data returned.");
          }
        } else if (
          contentType.includes(
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          )
        ) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setFileDownloadUrl(url);
        } else {
          setError("Unsupported content type received from server.");
        }
      } catch (err) {
        setError(err.message || "Error fetching KPI data");
      } finally {
        setLoading(false);
      }
    };

    fetchKPI();
  }, [kpiName]);

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/dash/brand-performance")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Back to KPIs
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {decodeURIComponent(kpiName)}
      </h2>

      <div className="bg-white p-4 rounded-lg border shadow max-w-5xl mx-auto text-center">
        {loading && <p className="text-gray-600">Loading KPI data...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && imageUrl && (
          <img
            src={imageUrl}
            alt={kpiName}
            className="mx-auto max-w-full max-h-[600px] rounded"
          />
        )}

        {!loading && !error && fileDownloadUrl && (
          <a
            href={fileDownloadUrl}
            download={`${kpiName}.docx`}
            className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download DOCX Report
          </a>
        )}

        {!loading && !error && jsonData.length > 0 && (
          <div className="overflow-x-auto mt-4 text-left">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  {Object.keys(jsonData[0] || {}).map((key) => (
                    <th key={key} className="px-3 py-2 border">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jsonData.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50">
                    {Object.values(row).map((val, i) => (
                      <td key={i} className="px-3 py-1 border text-sm">
                        {val !== null && val !== undefined
                          ? val.toString()
                          : "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiDetails;
