import React from "react";
import { motion } from "framer-motion";
import "./SWOT.css";

const BrandHealth = () => {
  const kpis = [
    "High Brand Search Volume Rank",
    "Positive Overall Sentiment Score",
    "Wide Product Range Visibility",
    "Strong E-commerce Presence/Ratings",
    "High Review Volume",
    "Key Negative Review Themes Frequency",
    "Lower Engagement Rate vs. Select Competitors",
    "Identified Website Usability Issues",
    "Gaps in Online Customer Service Response",
    "Negative News Sentiment Spikes",
    "High Growth Rate in Adjacent Categorys",
    "Rising Trend Alignment",
    "Unmet Needs Identified in Reviews",
    "Competitor Weaknesses Identified",
    "Untapped Geographic Search Interest"

  ];

  return (
    <div className="swot-container h-auto text-blue-700 mx-auto bg-purple-50 w-[100%] p-6 grid grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="market-card p-4 w-[400px] h-[210px] border shadow-md"
        >
          <h5>{kpi}</h5>
        </motion.div>
      ))}
    </div>
  );
};

export default BrandHealth;
