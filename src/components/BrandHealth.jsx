import React from "react";
import { motion } from "motion/react";
import "./brand.css";

const BrandHealthKPIs = () => {
  return (
    <div className="brand-container h-auto text-blue-700 mx-auto bg-purple-50 w-[100%] p-6 grid grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={title}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="market-card p-4 w-[400px] h-[210px] border shadow-md"
        >
          <h5>{title}</h5>
        </motion.div>
      ))}
    </div>
  );
};

export default BrandHealthKPIs;
