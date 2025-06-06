import React from "react";
import { motion } from "motion/react";
import "./CompetitiveIntel.css";

const ConsumerBehavior = () => {
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
        <h5>Inferred Customer Journey Mapping (Online)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Platform Role in Purchase Funnel (Inferred)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Brand Switching Triggers (Mentioned)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>High-Intent Keyword Performance</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Information Seeking Behavior Patterns</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Mobile vs. Desktop Interaction Signals (Inferred)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>User Segmentation Proxy (Based on Language/Interests)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Community Engagement Level (Brand Forums/Groups)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="market-card
        
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Purchase Frequency Indicators (Mentions)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Basket Composition Clues (Mentions)</h5>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Influence Attribution Guesses (Mentions)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Return/Refund Issue Mentions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Subscription Interest Signals</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Accessibility Complaint Frequency</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Cross-Generational Appeal Signals</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Health Consciousness Spectrum</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Recipe Usage/Integration Mentions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Comparison with Homemade/Local Alternatives</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Impulse Purchase Indicators</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Unboxing Experience Mentions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Digital Payment Preference/Issues</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Gift Card/Voucher Mentions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>"Food Hack" Mentions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Cultural Significance Discussions</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Information Overload/Simplicity Desire</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Post-Purchase Dissonance Signals</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Trust Indicator Analysis (Reviews)</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Search Behavior Evolution</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Online Community Influence</h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="market-card
        p-4 w-[400px] h-[210px]  border shadow-md"
      >
        <h5>Response to Price Increase Justification</h5>
      </motion.div>
    </div>
// ...existing code...
  );
// ...existing code...
  
};

export default ConsumerBehavior;
