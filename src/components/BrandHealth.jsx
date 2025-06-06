import React from "react";
import { motion } from "framer-motion";
import "./health.css";

const BrandHealth = () => {
  const kpis = [
    "Brand Search Volume Trend",
    "Haldiram vs. Competitor Search Volume Trend",
    "Haldiram Share of Search",
    "Social Media Mention Volume",
    "Social Media Sentiment Score",
    "Social Media Share of Voice",
    "Primary Social Platform Follower Count",
    "Follower Growth Rate",
    "Social Media Posting Frequency",
    "Engagement Rate",
    "Top Performing Content Themes",
    "Website Traffic Estimate Rank",
    "Estimated Bounce Rate",
    "Estimated Avg. Visit Duration",
    "Top Traffic Sources",
    "SEO Performance Indicator",
    "Top Organic Keywords Visibility",
    "Website Mobile Friendliness Score",
    "Page Load Speed Score",
    "News Mention Frequency",
    "News Sentiment",
    "Online Review Volume",
    "Average Online Rating",
    "Positive Review Themes",
    "Negative Review Themes",
    "Customer Service Response Rate",
    "Brand Association Cloud",
    "E-commerce Page Quality Score",
    "New Product Launch Visibility",
    "Restaurant Presence & Ratings"
  ];

  return (
    <div className="brand-container h-auto text-blue-700 mx-auto bg-purple-50 w-[100%] p-6 grid grid-cols-3 gap-4">
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
