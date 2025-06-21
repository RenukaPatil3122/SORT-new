import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./market.css";

const SWOTAnalysis = () => {
  const navigate = useNavigate();
  return (
    <div className="market-container h-auto text-red-500  mx-auto bg-purple-50 p-6 grid grid-cols-3 gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/high-brand-search-volume-rank")}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h5>High Brand Search Volume Rank</h5>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/positive-overall-sentiment-score")}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h5>Positive Overall Sentiment Score</h5>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/wide-product-range-visibility")}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h5>Wide Product Range Visibility</h5>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/strong-ecommerce-presence-ratings")}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h5>Strong E-commerce Presence/Ratings </h5>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/high-review-volume")}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h5>High Review Volume</h5>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/key-negative-review-themes-frequency")}
      >
        <h5>Key Negative Review Themes Frequency</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/lower-engagement-rate-vs-select-competitors")}
      >
        <h5>Lower Engagement Rate vs. Select Competitors</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/identified-website-usability-issues")}
      >
        <h5>Identified Website Usability Issues </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/gaps-in-online-customer-service-response")}
      >
        <h5>Gaps in Online Customer Service Response</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/negative-news-sentiment-spikes")}
      >
        <h5>Negative News Sentiment Spikes</h5>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/high-growth-rate-in-adjacent-categories")}
      >
        <h5>High Growth Rate in Adjacent Categories </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/rising-trend-alignment")}
      >
        <h5>Rising Trend Alignment</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/unmet-needs-identified-in-reviews")}
      >
        <h5>Unmet Needs Identified in Reviews</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/competitor-weaknesses-identified")}
      >
        <h5>Competitor Weaknesses Identified</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card p-4 w-[340px] h-[210px] border shadow-md cursor-pointer hover:shadow-lg hover:bg-purple-100 transition"
        onClick={() => navigate("/dash/untapped-geographic-search-interest")}
      >
        <h5>Untapped Geographic Search Interest</h5>
      </motion.div>
    </div>
  );
};

export default SWOTAnalysis;