import React from "react";
import { motion } from "motion/react";
import "./consumer.css";

const Consumer = () => {
  return (
    <div className="consumer-container h-auto text-blue-600 mx-auto bg-purple-50 p-6 grid grid-cols-3 gap-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Key Consumer Search Terms </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Purchase Intent Keywords Search Volume Trend</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Demographic Indicators</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Psychographic Indicators </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Occasion Association </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Platform Preference for Discussion </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Common Comparison Products/Brands </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Unmet Needs/Features Requests </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="consumer-card
        
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Emerging Consumers Vocabulary/Slang </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Influence of Promotion/Discounts </h5>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>International Consumer Sentiment Variance </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Packaging Feedback</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Product Discovery Mentions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Loyalty Indicators  </h5>
      </motion.div>
       <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="consumer-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Gifting Mentions Analysis </h5>
      </motion.div>
    </div>
  );
};

export default Consumer;
