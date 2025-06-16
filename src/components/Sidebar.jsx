import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart2,
  Users,
  HeartPulse,
  ShoppingCart,
  PieChart,
  Activity,
  LineChart,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/dash/home", icon: <Home size={18} /> },
    {
      name: "Market & Industry",
      path: "/dash/market-industry",
      icon: <BarChart2 size={18} />,
    },
    {
      name: "Competitors",
      path: "/dash/competitors",
      icon: <Users size={18} />,
    },
    {
      name: "Brand Health",
      path: "/dash/brand-health",
      icon: <HeartPulse size={18} />,
    },
    {
      name: "Consumers",
      path: "/dash/consumers",
      icon: <ShoppingCart size={18} />,
    },
    {
      name: "SWOT Analysis",
      path: "/dash/swot-analysis",
      icon: <PieChart size={18} />,
    },
    {
      name: "Category Dynamics",
      path: "/dash/category-dynamics",
      icon: <Activity size={18} />,
    },
    {
      name: "Competitive Intel",
      path: "/dash/competitive-intel",
      icon: <LineChart size={18} />,
    },
    {
      name: "Brand Performance",
      path: "/dash/brand-performance",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "Advanced Consumer Behavior",
      path: "/dash/Consumer-behavior",
      icon: <UserCheck size={18} />,
    }
    
  ];

  return (
    <>
      {/* Hamburger button */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">Dashboard</div>
        <ul className="sidebar-list">
          {navItems.map(({ name, path, icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`sidebar-link ${
                  location.pathname === path ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="sidebar-icon">{icon}</span>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
