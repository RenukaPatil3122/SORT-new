import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MarketIndustry from "./components/MarketIndustry";
import Competitors from "./components/Competitors";
import BrandHealth from "./components/BrandHealth";
import Consumer from "./components/Consumers";
import SWOTAnalysis from "./components/SWOTAnalysis";
import CategoryDynamics from "./components/CategoryDynamics";
import CompetitiveIntel from "./components/CompetitiveIntel";
import BrandPerformance from "./components/BrandPerformance";
import ConsumerBehavior from "./components/ConsumerBehavior";

import AuthForm from "./components/AuthForm";
import KPIDetail from "./components/kpiDetails"; // ✅ NEW import for dynamic KPI route
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Dashboard from "./pages/Dashboard";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  if (isAuthPage) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-light-gray-100">
        <AuthForm />
      </main>
    );
  }

  return (
    <div>
      {/* This wrapper has left padding to offset the fixed sidebar */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/dash" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="market-industry" element={<MarketIndustry />} />
            <Route path="competitors" element={<Competitors />} />
            <Route path="brand-health" element={<BrandHealth />} />
            <Route path="consumers" element={<Consumer />} />
            <Route path="swot-analysis" element={<SWOTAnalysis />} />
            <Route path="category-dynamics" element={<CategoryDynamics />} />
            <Route path="competitive-intel" element={<CompetitiveIntel />} />
            <Route path="brand-performance" element={<BrandPerformance />} />
            <Route path="consumer-behavior" element={<ConsumerBehavior />} />

            {/* ✅ New Dynamic KPI Detail Routes */}
            <Route path="brand-performance/:kpiName" element={<KPIDetail />} />
            <Route path="brand-health/:kpiName" element={<KPIDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
