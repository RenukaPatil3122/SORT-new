import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <Sidebar />
      <div className="w-[89%] ml-[243px]  text-sm leading-6 dashboard-content">
        <Outlet /> {/* Render child routes here */}
      </div>
    </div>
  );
};

export default Dashboard;
