import React from "react";
import { motion } from "framer-motion";

const CategoryDynamics = () => {
  const kpis = [
    "Trend Velocity Index",
    "Category Keyword Ecosystem Complexity",
    "Cross-Category Cannibalization Risk Indicator",
    "International Market Entry Barrier Indicator",
    "Sub-segment Growth Potential (e.g., Baked Snacks vs. Fried)",
    "Supply Chain Disruption Signal Frequency",
    "Price Sensitivity Fluctuation (via Sentiment Analysis)",
    'Sustainability"Greenwashing" Perception Score',
    "Regional Taste Preference Divergence",
    "Market Consolidation Activity Index",
    "Snackification Trend Penetration",
    "Direct-to-Consumer (DTC) Channel Viability Index (Category)",
    "Influence of Food Bloggers or Media on Category Perception",
    "Regulatory Sentiment Index",
    "Impact of Weather or Seasonality on Search or Discussion",
    "Ethical Sourcing Mention Frequency or Sentiment",
    "Food Tourism Association",
    "Health Claim Scrutiny Index",
    "Cross-Cultural Adaptation Challenges (Export Markets)",
    "Impact of Inflation on Discretionary Spending (Food Context)",
  ];

  return (
    // ...existing code...
    <div className="market-container h-auto text-blue-500 p-4  mx-auto bg-purple-50 w-[100%]  grid grid-cols-3 gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Trend Velocity Index</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Category Keyword Ecosystem Complexity</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Cross-Category Cannibalization Risk Indicator</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>International Market Entry Barrier Indicator</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Sub-segment Growth Potential (e.g., Baked Snacks vs. Fried)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Supply Chain Disruption Signal Frequency</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Price Sensitivity Fluctuation (via Sentiment Analysis)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Sustainability "Greenwashing" Perception Score</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Regional Taste Preference Divergence</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Market Consolidation Activity Index</h5>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>"Snackification" Trend Penetration</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Direct-to-Consumer (DTC) Channel Viability Index (Category)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Influence of Food Bloggers/Media on Category Perception</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Regulatory Sentiment Index</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Impact of Weather/Seasonality on Search/Discussion</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Ethical Sourcing Mention Frequency/Sentiment</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>"Food Tourism" Association</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Health Claim Scrutiny Index</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Cross-Cultural Adaptation Challenges (Export Markets)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Impact of Inflation on Discretionary Spending (Food Context)</h5>
      </motion.div>
    </div>
  );
  // ...existing code...
};

export default CategoryDynamics;
