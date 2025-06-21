import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CompetitiveIntel.css";

const BrandPerformance = () => {
  const navigate = useNavigate();

  const kpis = [
    "Haldiram Brand Association Strength (Specific Attributes)",
    "Haldiram Sentiment Driver Analysis",
    "Haldiram Campaign Effectiveness Correlation (Search/Social Buzz)",
    "Haldiram Crisis Response Effectiveness",
    "Haldiram Owned Media Content Performance Variance",
    "Haldiram Website User Journey Friction Points (Inferred)",
    "Haldiram Brand Personality Perception",
    "Haldiram Specific Product Performance Index (Reviews/Search)",
    "Haldiram Regional Perception Variance",
    "Haldiram Employer Branding Index (Glassdoor/LinkedIn)",
    "Haldiram CSR Initiative Impact/Resonance",
    "Haldiram Brand Evangelism Rate (Proxy)",
    "Haldiram Website Conversion Funnel Bottleneck (Inferred)",
    "Haldiram Cross-Promotion Effectiveness",
    "Haldiram Nostalgia Factor Strength",
    "Haldiram Perceived Value for Money Score",
    "Haldiram Online vs. Offline Perception Gap Signals",
    "Haldiram Influencer Collaboration Authenticity",
    "Haldiram 'Iconic' Product Status",
    "Haldiram Response to Negative Feedback Loop",
    "Haldiram Website Information Scent",
    "Haldiram Brand Mention Context Analysis (Beyond Sentiment)",
    "Haldiram User-Generated Content Volume & Quality",
    "Haldiram Search Result Snippet Effectiveness",
    "Haldiram Brand Resilience Score (Post-Crisis Recovery)",
  ];

  return (
    <div className="market-container h-auto text-blue-500 p-4 mx-auto bg-purple-50 w-[100%] grid grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="market-card p-4 w-[400px] h-[210px] border shadow-md cursor-pointer hover:bg-blue-100"
          onClick={() =>
            navigate(`/dash/brand-performance/${encodeURIComponent(kpi)}`)
          }
        >
          <h5>{kpi}</h5>
        </motion.div>
      ))}
    </div>
  );
};

export default BrandPerformance;
