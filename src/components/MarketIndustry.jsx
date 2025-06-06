import React from "react";
import { motion } from "motion/react";
import "./market.css";

const MarketIndustry = () => {
  return (
    <div className="market-container h-auto text-blue-500 p-4  mx-auto     bg-purple-50 w-[98%]  grid grid-cols-3 gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Estimated Market Size </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Estimated Market Growth Rate</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Key Market Trends Identification:</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Trend Strength </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Regulatory Changes/News Frequency </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Key Technology Mentions </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>E-commerce Penetration Indicator</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Quick-Commerce Growth Indicator </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Sustainability Focus Index </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Health & Wellness Trend Index </h5>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Key Ingredient Price Trend Mentions </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Geographic Hotspots</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Emerging Category Identification</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Private Label Growth Mentions </h5>
      </motion.div>
    </div>
  );
};

export default MarketIndustry;
